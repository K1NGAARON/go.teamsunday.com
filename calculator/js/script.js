const page = {
    data: {
        cost_reduction: 0,
        money_saved: 0,
    },
    ready: function () {
        this.events();
    },
    events: function () {
        const self = this;
        $('#formToMail').on('submit', function (event) {
            event.preventDefault()
            self.methods.onSubmitEvent.bind(self)();
            return false;
        });

        const updateCalculationsFn = self.methods.updateCalculations.bind(self)
        $('#myRange').change(updateCalculationsFn);
        $('#personal-note').change(updateCalculationsFn);
        $('#different-sizes').change(updateCalculationsFn);

        const showEmailFormFn = self.methods.showEmailForm.bind(self)
        $('#inbox').click(showEmailFormFn);
    },
    methods: {
        showEmailForm: function (e) {
            e.preventDefault();
            $('#formToMail').toggle('active');
            $('#inbox').toggle('active');
        },
        onSubmitEvent: function () {
            const self = this;
            $('#formToMail').find('[type="submit"]').prop('disabled', true);

            $.ajax({
                url: 'https://connect.teamsunday.com/api/go/campaign/2be84180-d928-40d3-a97f-c1dd576bc558/process',
                method: 'POST',
                data: {
                    cost_reduction: self.data.cost_reduction,
                    email_address: $('#formToMail [name="email"]').val(),
                    money_saved: self.data.money_saved,
                    monthly_packages: $('#output').text(),
                    name: $('#formToMail [name="name"]').val(),
                    // total_costs: '', // Optional
                    // wardrobe_fee_total: '', // Optional
                },
                dataType: 'json',
            }).then(function (data) {
                $('#formToMail').html('<h2>Thank you for your message!</h2>');
            }).fail(function (err) {
                alert('There was an error sending your message. Please try again.');
            }).done(function () {
                $('#formToMail').find('[typeof="submit"]').prop('disabled', false);
            });
        },
        updateCalculations: function () {
            const slider = document.getElementById("myRange");
            const output = document.getElementById("output");
            output.innerHTML = slider.value;

            slider.oninput = function () {
                output.innerHTML = this.value;
            }

            const amountPackages = slider.value * 12;

            $('#calculator > .item.output').addClass('active');

            // FIXED VARIABLES FOR CALCULATIONS
            const logisticsCosts = {
                wardrobeFee: 395,
                pickingFee: 4,

                warehousingPerPiece: 0.48,

                dataInput: 0.083,
                pickingTime: 0.33,
                tripPost: 0.2,

                importDocuments: 1,
                importNecessary: 0.1,

                errorRate: 0.048,

                helpdeskTime: 0.5,
                helpdeskNecessary: 0.1,

                returnTime: 0.33,
                returnNecessary: 0.05,

                stockUpdateTime: 0.15,

                materialCost: 0.5,
                softwareCost: 49,
                hourlyCost: 32.90,

                packagesFU: 0.15,
                stockCount: 2,

                personalNote: 0,
                differentSizes: 0,
            };

            // Check if checkboxes are "checked"
            if (document.querySelector('#personal-note').checked) {
                logisticsCosts.personalNote = 0.15;
            } else {
                logisticsCosts.personalNote = 0;
            }
            ;

            if (document.querySelector('#different-sizes').checked) {
                logisticsCosts.differentSizes = 0.25;
            } else {
                logisticsCosts.differentSizes = 0;
            }

            // GENERAL MATH
            const warehousingCost = amountPackages * logisticsCosts.warehousingPerPiece * 12;
            const shippingSoftware = logisticsCosts.softwareCost * 12;
            const pickingTime = ((logisticsCosts.pickingTime + logisticsCosts.tripPost + logisticsCosts.stockUpdateTime) * logisticsCosts.hourlyCost) * amountPackages;
            const dutieMgmt = amountPackages * (logisticsCosts.importDocuments * logisticsCosts.importNecessary) * logisticsCosts.hourlyCost;
            const dataInput = amountPackages * logisticsCosts.dataInput * logisticsCosts.hourlyCost;
            const materialCosts = amountPackages * logisticsCosts.materialCost;
            const resendingCosts = amountPackages * logisticsCosts.errorRate * (pickingTime / 500);
            const returnMgmt = amountPackages * (logisticsCosts.returnTime * logisticsCosts.returnNecessary) * logisticsCosts.hourlyCost;
            const customerService = amountPackages * (logisticsCosts.helpdeskTime * logisticsCosts.helpdeskNecessary) * logisticsCosts.hourlyCost;
            const internalFollowUp = amountPackages * logisticsCosts.packagesFU * logisticsCosts.hourlyCost;
            const stockCounts = 2 * logisticsCosts.stockCount * logisticsCosts.hourlyCost;

            const optionals = (amountPackages * logisticsCosts.personalNote) + (amountPackages * logisticsCosts.differentSizes);
            const optionalsCost = optionals * logisticsCosts.hourlyCost;

            const totalCost = warehousingCost + optionalsCost + shippingSoftware + pickingTime + dutieMgmt + dataInput + materialCosts + resendingCosts + returnMgmt + customerService + internalFollowUp + stockCounts;
            const costPerPackage = totalCost / amountPackages;


            // WARDROBE MATH
            const wardrobePlatformFee = 12 * logisticsCosts.wardrobeFee;
            const wardrobePickingFee = amountPackages * logisticsCosts.pickingFee;
            const wardrobeInput = (amountPackages * logisticsCosts.dataInput) * logisticsCosts.hourlyCost;

            const wardrobeFeeTotal = wardrobePlatformFee + wardrobePickingFee + wardrobeInput;
            const wardrobeCostPerPackage = wardrobeFeeTotal / amountPackages;

            const costReduction = (((totalCost - wardrobeFeeTotal) / totalCost) * 100).toFixed(2);
            const moneySaved = (totalCost - wardrobeFeeTotal).toFixed(2);
            const hassleReduction = 1;


            // INPUT DATA ON FRONT END
            page.data.cost_reduction = costReduction;
            page.data.money_saved = moneySaved;
            const germanNumberFormat = new Intl.NumberFormat('de-DE');
            $('#costHolder').html(germanNumberFormat.format(costReduction));
            $('#moneySavedHolder').html(germanNumberFormat.format(moneySaved));
        }
    }
}

page.ready();