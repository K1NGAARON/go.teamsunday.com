const emailInput = $('#formToMail [name="email"]');
const formElement = $('#formToMail');
const inboxElement = $('#inbox');
const nameInputElement = $('#formToMail [name="name"]');
const submitButton = formElement.find('[type="submit"]');

const page = {
    data: {
        cost_reduction: 0,
        money_saved: 0,
        redirectUrlAfterSuccess: '/calculator/thanks',
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
            submitButton.html('<i class="fa fa-spinner fa-spin"></i> Send to mail');
            submitButton.prop('disabled', true);

            emailInput.prop('disabled', true);
            nameInputElement.prop('disabled', true);

            // const data = new FormData();

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
                wardrobe_error: parseFloat(self.data.wardrobe_error),
            }

            // data.append('payload', JSON.stringify(payLoad));

            // const postUrl = 'http://localhost:8002/api/go/campaign/2be84180-d928-40d3-a97f-c1dd576bc558/process';
            const postUrl = 'https://connect.teamsunday.com/api/go/campaign/2be84180-d928-40d3-a97f-c1dd576bc558/process';

            axios.post(postUrl, payLoad, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                window.location.href = self.data.redirectUrlAfterSuccess;
                // formElement.html('<h2>Thank you for your message!</h2>');
            }).catch((error) => {
                console.error(error);
                if (error.response) {
                    if (error.response.data.hasOwnProperty('message')
                        && error.response.data.message.trim() !== 'An email was sent') {
                        alert(error.response.data.message);
                    }
                }
                self.methods.revertForm();
            // }).then(function () {
            //     self.methods.revertForm();
            });
        },
        revertForm: function () {
            submitButton.prop('disabled', false);
            emailInput.prop('disabled', true);
            nameInputElement.prop('disabled', true);
        },
        updateCalculations: function () {
            const slider = document.getElementById("myRange");
            const output = document.getElementById("output");
            output.innerHTML = slider.value;

            slider.oninput = function () {
                output.innerHTML = this.value;
            }

            // const monthlyPackages = slider.value;
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
                logisticsCosts.personalNote = 0; // Not sure if needed
            }

            if (document.querySelector('#different-sizes').checked) {
                logisticsCosts.differentSizes = 0.25;
            } else {
                logisticsCosts.differentSizes = 0; // Not sure if needed
            }

            // GENERAL MATH

            // const monthlyPackages = document.querySelector('');

            // Warehousing Costs
            const shippingSoftware = logisticsCosts.softwareCost * 12;
            const stockCounts = 2 * logisticsCosts.stockCount * logisticsCosts.hourlyCost;
            const materialCosts = amountPackages * logisticsCosts.materialCost;
            const warehousingCost = amountPackages * logisticsCosts.warehousingPerPiece * 12
                + shippingSoftware
                + stockCounts
                + materialCosts;

            // Fulfilment Costs
            const personalNoteCosts = amountPackages * logisticsCosts.personalNote;
            const differentSizesCosts = amountPackages * logisticsCosts.differentSizes;
            const pickingTime = ((logisticsCosts.pickingTime + logisticsCosts.tripPost
                    + logisticsCosts.stockUpdateTime) * logisticsCosts.hourlyCost) * amountPackages
                + personalNoteCosts
                + differentSizesCosts;

            // Data Input Costs
            const dutyMgmt = amountPackages * (logisticsCosts.importDocuments * logisticsCosts.importNecessary) * logisticsCosts.hourlyCost;
            const internalFollowUp = amountPackages * logisticsCosts.packagesFU * logisticsCosts.hourlyCost;
            const dataInput = amountPackages * logisticsCosts.dataInput * logisticsCosts.hourlyCost
                + dutyMgmt
                + internalFollowUp;
            

            // Error Management Costs
            const returnMgmt = amountPackages * (logisticsCosts.returnTime * logisticsCosts.returnNecessary) * logisticsCosts.hourlyCost;
            const customerService = amountPackages * (logisticsCosts.helpdeskTime * logisticsCosts.helpdeskNecessary) * logisticsCosts.hourlyCost;
            const resendingCosts = amountPackages * logisticsCosts.errorRate * (pickingTime / 500)
                + returnMgmt
                + customerService;

            const totalErrorCost = returnMgmt + customerService + resendingCosts;

            console.log(totalErrorCost);

            const totalCost = warehousingCost + pickingTime + dataInput + resendingCosts;
            // const costPerPackage = totalCost / amountPackages;

            // WARDROBE MATH
            const wardrobePlatformFee = 12 * logisticsCosts.wardrobeFee;
            const wardrobePickingFee = amountPackages * logisticsCosts.pickingFee;
            const wardrobeInput = (amountPackages * logisticsCosts.dataInput) * logisticsCosts.hourlyCost;

            const wardrobeError = (amountPackages * logisticsCosts.helpdeskNecessary * 0.08 * logisticsCosts.hourlyCost)
                + (0.01 * 2.5 * amountPackages);

            console.log(wardrobeError);
            
            const wardrobeFeeTotal = wardrobePlatformFee + wardrobePickingFee + wardrobeInput;
            // const wardrobeCostPerPackage = wardrobeFeeTotal / amountPackages;

            const costReduction = ((totalCost - wardrobeFeeTotal) / totalCost) * 100;
            const moneySaved = totalCost - wardrobeFeeTotal;
            // const hassleReduction = 1;

            // INPUT DATA ON FRONT END
            page.data.cost_reduction = costReduction;
            page.data.data_input_costs = dataInput;
            page.data.error_management_costs = totalErrorCost; // CHANGED
            page.data.fulfilment_costs = pickingTime;
            page.data.money_saved = moneySaved;
            page.data.total_costs = totalCost;
            page.data.wardrobe_data_input = wardrobeInput;
            page.data.wardrobe_fee_total = wardrobeFeeTotal;
            page.data.wardrobe_picking_fee = wardrobePickingFee;
            page.data.wardrobe_platform_fee = wardrobePlatformFee;
            page.data.warehousing_costs = warehousingCost;

            page.data.wardrobe_error = wardrobeError; // CHANGED


            const germanNumberFormat = new Intl.NumberFormat('de-DE');
            $('#costHolder').html(germanNumberFormat.format(costReduction.toFixed(2)));
            $('#moneySavedHolder').html(germanNumberFormat.format(moneySaved.toFixed(0)));
            $('#outputYearly').html(germanNumberFormat.format(amountPackages));
            $('.yearly').removeClass('hidden');
        }
    }
}

page.ready();