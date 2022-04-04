// NOTE**
// Sometimes (Total bill/person) may be one penny over actual bill, to cover total bill
// NOTE**
let billAmtInput = document.querySelector("#bill-amt");
let tipSlider = document.querySelector("#tip-slider");
let billNumPressed;


// TODO: BILL INPUT/UPPER BOX
let calculateBillAndTipAmt = (e) => {
	billNumPressed = parseInt(e.target.value);
	// Function that handles upperbox tip logic
	tipCalcFunction(billNumPressed);
};

//Check to see if this the best way to handle two events
billAmtInput.addEventListener("keyup", calculateBillAndTipAmt)
billAmtInput.addEventListener("change",calculateBillAndTipAmt)

//TODO: UPPER BOX TIP LOGIC
function changeTipSliderFunc(e) {
	const tipPercent = document.querySelector(".tip-percent");
	let tipAmountSpan = document.querySelector(".tip-amount-span");
	let billTotalPlusTip = document.querySelector(".bill-total-plus-tip");
	let tipEvaluation = (billNumPressed * Number(tipSlider.value / 100)).toFixed(2);
	tipPercent.textContent = e.target.value;
	tipAmountSpan.textContent = tipEvaluation;
	billTotalPlusTip.innerHTML = `<strong>$</strong><strong>${billNumPressed + tipEvaluation}</strong>`;
}
function tipCalcFunction(){
	tipSlider.addEventListener("input", changeTipSliderFunc)
}


function xx() {




	// -Grab split person value-split PERSON for 1, people for more than 1
	let billForSplit = Number(billAmtInput + tipTotal).toFixed(2);
	let splitSlider = document.querySelector("#split-slider");
	const splitPeople = document.querySelector(".split-people");
	if (splitSlider.value <= 1) {
		splitPeople.innerHTML = splitSlider.value + " person";
	} else {
		splitPeople.innerHTML = splitSlider.value + " people";
	}
	// -grab tip per person value
	const splitTip = document.querySelector(".split-tip");
	// -grab total bill per person value
	const splitTotal = document.querySelector(".split-total");
	// - tip per person equals tipTotal / split slider value
	splitTip.innerHTML = "$" + (tipTotal / splitSlider.value).toFixed(2);
	// -total bill/person = billTotal / splitSlider.value
	splitTotal.innerHTML =
		"<strong>$</strong>" +
		"<strong>" +
		(billForSplit / splitSlider.value).toFixed(2) +
		"</strong>";
}
// tipSlider.oninput = tipFunc;
// splitSlider.oninput = tipFunc;
// document.querySelector("#bill-amt").oninput = tipFunc;

