// NOTE**
// --Sometimes (Total bill/person) may be one penny over actual bill, to cover total bill
// --certain tip percents add a bunch of zeros after the decimal
// --real time update when changing bill amount after theres already an amount in the input
// NOTE**

let billAmtInput = document.querySelector("#bill-amt");
let tipSlider = document.querySelector("#tip-slider");
let splitSlider = document.querySelector("#split-slider");
const splitTipSpan = document.querySelector(".split-tip");
const splitTotal = document.querySelector(".split-total");
let billNumPressed;
let tipEvaluation;
let billPlusTipCalc;

//TODO Function Calls
//Calls bill split slider function that handles slider event
splitBillSliderListener();

// TODO: BILL INPUT/UPPER BOX
function calculateBillAndTipAmt(e) {
	billNumPressed = parseFloat(e.target.value);
	// Function that handles upperbox tip logic
	tipCalcFunction();
}

//TODO: UPPER BOX TIP LOGIC
function changeTipSliderFunc(e) {
	const tipPercent = document.querySelector(".tip-percent");
	let tipAmountSpan = document.querySelector(".tip-amount-span");
	let billTotalPlusTipSpan = document.querySelector(".bill-total-plus-tip");
	tipEvaluation = (billNumPressed * Number(tipSlider.value / 100)).toFixed(2); //tip total
	tipPercent.textContent = e.target.value;
	tipAmountSpan.textContent = tipEvaluation;
	billPlusTipCalc = billNumPressed + parseFloat(tipEvaluation); //total bill + tip
	billTotalPlusTipSpan.innerHTML = `<strong>$</strong><strong>${billPlusTipCalc}</strong>`;
}

//TODO: LOWER BOX TIP LOGIC
function splitBillFunc() {
	const splitPeople = document.querySelector(".split-people");
	splitSlider.value === 1 ?
		splitPeople.textContent = `${splitSlider.value} person`:
		splitPeople.textContent = `${splitSlider.value} people`;

	getSplitTipPerPersonAmt();
	totalBillSplitPerPerson()
}

function getSplitTipPerPersonAmt() {
	//divides tip by amount of people(pulled from slider value)
	splitTipSpan.textContent = `$${(tipEvaluation / splitSlider.value).toFixed(2)}`;
}

function totalBillSplitPerPerson() {
	splitTotal.innerHTML =
		`<strong>$</strong><strong>${(billPlusTipCalc / splitSlider.value).toFixed(2)}</strong>`
}

//Check to see if this the best way to handle two events
billAmtInput.addEventListener("keyup", calculateBillAndTipAmt);
billAmtInput.addEventListener("change",calculateBillAndTipAmt);

function tipCalcFunction(){
	tipSlider.addEventListener("input", changeTipSliderFunc)
}

function splitBillSliderListener() {
	splitSlider.addEventListener("input", splitBillFunc)
}