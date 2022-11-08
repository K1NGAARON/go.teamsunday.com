function updateCalculations(e) {
  let slider = document.getElementById("myRange");
  let output = document.getElementById("output");
  output.innerHTML = slider.value;
  
  slider.oninput = function() {
    output.innerHTML = this.value;
  }
  
  let amountPackages = slider.value * 12;

  $('#calculator > .item.output').addClass('active');

  console.log(amountPackages);

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


// GENERAL MATH
let warehousingCost = amountPackages * logisticsCosts.warehousingPerPiece * 12;
let shippingSoftware = logisticsCosts.softwareCost * 12;
let pickingTime = ((logisticsCosts.pickingTime + logisticsCosts.tripPost + logisticsCosts.stockUpdateTime) * logisticsCosts.hourlyCost) * amountPackages;
let dutieMgmt = amountPackages * (logisticsCosts.importDocuments * logisticsCosts.importNecessary) * logisticsCosts.hourlyCost;
let dataInput = amountPackages * logisticsCosts.dataInput * logisticsCosts.hourlyCost;
let materialCosts = amountPackages * logisticsCosts.materialCost;
let resendingCosts = amountPackages * logisticsCosts.errorRate * (pickingTime / 500);
let returnMgmt = amountPackages * (logisticsCosts.returnTime * logisticsCosts.returnNecessary) * logisticsCosts.hourlyCost;
let customerService = amountPackages * (logisticsCosts.helpdeskTime * logisticsCosts.helpdeskNecessary) * logisticsCosts.hourlyCost;
let internalFollowUp = amountPackages * logisticsCosts.packagesFU * logisticsCosts.hourlyCost;
let stockCounts = 2 * logisticsCosts.stockCount * logisticsCosts.hourlyCost;

let optionals = (amountPackages * logisticsCosts.personalNote) + (amountPackages * logisticsCosts.differentSizes);
let optionalsCost = optionals * logisticsCosts.hourlyCost;
console.log(optionals);
console.log(optionalsCost);

let totalCost = warehousingCost + shippingSoftware + pickingTime + dutieMgmt + dataInput + materialCosts + resendingCosts + returnMgmt + customerService + internalFollowUp + stockCounts;
let costPerPackage = totalCost / amountPackages;


// WARDROBE MATH
let wardrobePlatformFee = 12 * logisticsCosts.wardrobeFee;
let wardrobePickingFee = amountPackages * logisticsCosts.pickingFee;
let wardrobeInput = (amountPackages * logisticsCosts.dataInput) * logisticsCosts.hourlyCost;

let wardrobeFeeTotal = wardrobePlatformFee + wardrobePickingFee + wardrobeInput;
let wardrobeCostPerPackage = wardrobeFeeTotal / amountPackages;

let costReduction = (((totalCost - wardrobeFeeTotal) / totalCost) * 100).toFixed(2);
let moneySaved = (totalCost - wardrobeFeeTotal).toFixed(2);
let hassleReduction = 1;


// INPUT DATA ON FRONT END
$('#costHolder').html((new Intl.NumberFormat('de-DE').format(costReduction)));
$('#moneySavedHolder').html((new Intl.NumberFormat('de-DE').format(moneySaved)));

// (new Intl.NumberFormat('de-DE').format(costReduction));
// console.log(new Intl.NumberFormat('de-DE').format(moneySaved));
};


function showEmailForm(e) {
  e.preventDefault();
  $('#formToMail').toggle('active');


  $(this).toggle('active');
}

$('#myRange').change(updateCalculations);
$('#inbox').click(showEmailForm);