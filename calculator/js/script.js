const emailInput = $('#formToMail [name="email"]');
const formElement = $('#formToMail');
const inboxElement = $('#inbox');
const nameInputElement = $('#formToMail [name="name"]');

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
        formElement.on('submit', function (event) {
            event.preventDefault()
            const fn = self.methods.onSubmitEvent.bind(self)
            fn();
            return false;
        });

        const updateCalculationsFn = self.methods.updateCalculations.bind(self)
        $('#myRange').change(updateCalculationsFn);
        $('#personal-note').change(updateCalculationsFn);
        $('#different-sizes').change(updateCalculationsFn);

        const showEmailFormFn = self.methods.showEmailForm.bind(self)
        inboxElement.on('click', showEmailFormFn);
    },
    methods: {
        showEmailForm: function (e) {
            e.preventDefault();
            formElement.toggle('active');
            inboxElement.toggle('active');
            nameInputElement.focus();
        },
        onSubmitEvent: function () {
            const self = this;
            const submitButton = formElement.find('[type="submit"]');
            submitButton.html('<i class="fa fa-spinner fa-spin"></i> Send to mail');
            submitButton.prop('disabled', true);

            emailInput.prop('disabled', true);
            nameInputElement.prop('disabled', true);

            const data = new FormData();

            const payLoad = {
                cost_reduction: parseFloat(self.data.cost_reduction),
                data_input_costs: self.data.data_input_costs,
                email_address: emailInput.val(),
                error_management_costs: self.data.error_management_costs,
                fulfilment_costs: self.data.fulfilment_costs,
                money_saved: parseFloat(self.data.money_saved),
                monthly_packages: $('#myRange').val(),
                name: nameInputElement.val(),
                total_costs: self.data.total_costs,
                wardrobe_data_input: self.data.wardrobe_data_input,
                wardrobe_fee_total: self.data.wardrobe_fee_total,
                wardrobe_picking_fee: self.data.wardrobe_picking_fee,
                wardrobe_platform_fee: self.data.wardrobe_platform_fee,
                warehousing_costs: parseFloat(self.data.warehousing_costs),
            }

            data.append('payload', JSON.stringify(payLoad));

            // const postUrl = 'http://localhost:8002/api/go/campaign/2be84180-d928-40d3-a97f-c1dd576bc558/process';
            const postUrl = 'https://connect.teamsunday.com/api/go/campaign/2be84180-d928-40d3-a97f-c1dd576bc558/process';

            axios.post(postUrl, data, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
                .then(() => {
                    formElement.html('<h2>Thank you for your message!</h2>');
                })
                .catch(() => {
                    alert('There was an error sending your message. Please try again.');
                })
                .then(function () {
                    submitButton.prop('disabled', false);
                    emailInput.prop('disabled', true);
                    nameInputElement.prop('disabled', true);
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

            if (document.querySelector('#different-sizes').checked) {
                logisticsCosts.differentSizes = 0.25;
            } else {
                logisticsCosts.differentSizes = 0;
            }

            // GENERAL MATH
            const warehousingCost = amountPackages * logisticsCosts.warehousingPerPiece * 12;
            const shippingSoftware = logisticsCosts.softwareCost * 12;
            const pickingTime = ((logisticsCosts.pickingTime + logisticsCosts.tripPost + logisticsCosts.stockUpdateTime) * logisticsCosts.hourlyCost) * amountPackages;
            const dutyMgmt = amountPackages * (logisticsCosts.importDocuments * logisticsCosts.importNecessary) * logisticsCosts.hourlyCost;
            const dataInput = amountPackages * logisticsCosts.dataInput * logisticsCosts.hourlyCost;
            const materialCosts = amountPackages * logisticsCosts.materialCost;
            const resendingCosts = amountPackages * logisticsCosts.errorRate * (pickingTime / 500);
            const returnMgmt = amountPackages * (logisticsCosts.returnTime * logisticsCosts.returnNecessary) * logisticsCosts.hourlyCost;
            const customerService = amountPackages * (logisticsCosts.helpdeskTime * logisticsCosts.helpdeskNecessary) * logisticsCosts.hourlyCost;
            const internalFollowUp = amountPackages * logisticsCosts.packagesFU * logisticsCosts.hourlyCost;
            const stockCounts = 2 * logisticsCosts.stockCount * logisticsCosts.hourlyCost;

            const optionals = (amountPackages * logisticsCosts.personalNote) + (amountPackages * logisticsCosts.differentSizes);
            const optionalsCost = optionals * logisticsCosts.hourlyCost;

            const totalCost = warehousingCost + optionalsCost + shippingSoftware + pickingTime + dutyMgmt + dataInput + materialCosts + resendingCosts + returnMgmt + customerService + internalFollowUp + stockCounts;
            // const costPerPackage = totalCost / amountPackages;


            // WARDROBE MATH
            const wardrobePlatformFee = 12 * logisticsCosts.wardrobeFee;
            const wardrobePickingFee = amountPackages * logisticsCosts.pickingFee;
            const wardrobeInput = (amountPackages * logisticsCosts.dataInput) * logisticsCosts.hourlyCost;

            const wardrobeFeeTotal = wardrobePlatformFee + wardrobePickingFee + wardrobeInput;
            // const wardrobeCostPerPackage = wardrobeFeeTotal / amountPackages;

            const costReduction = ((totalCost - wardrobeFeeTotal) / totalCost) * 100;
            const moneySaved = totalCost - wardrobeFeeTotal;
            // const hassleReduction = 1;


            // INPUT DATA ON FRONT END
            page.data.cost_reduction = costReduction;
            page.data.data_input_costs = dataInput;
            page.data.error_management_costs = resendingCosts;
            page.data.fulfilment_costs = pickingTime;
            page.data.money_saved = moneySaved;
            page.data.total_costs = totalCost;
            page.data.wardrobe_data_input = wardrobeInput;
            page.data.wardrobe_fee_total = wardrobeFeeTotal;
            page.data.wardrobe_picking_fee = wardrobePickingFee;
            page.data.wardrobe_platform_fee = wardrobePlatformFee;
            page.data.warehousing_costs = warehousingCost;

            const germanNumberFormat = new Intl.NumberFormat('de-DE');
            $('#costHolder').html(germanNumberFormat.format(costReduction));
            $('#moneySavedHolder').html(germanNumberFormat.format(moneySaved));
        }
    }
}

page.ready();