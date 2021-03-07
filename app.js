// Upper Box Selections

const tipPercent = document.querySelector(".tip-percent");
const tipSlider = document.querySelector("#tip-slider");

tipSlider.oninput = function () {
	const billInput = Number(document.querySelector("#bill-amt").value);
	tipPercent.innerHTML = this.value + "%";

	let tipAmount = document.querySelector(".tip-amount");
	//Discovered that number input type returns a string
	//You can wrap multiple variables in parenthesis in order to append methods

	let tipTotal = Number((billInput * Number(this.value / 100)).toFixed(2));

	tipAmount.innerHTML = "$" + tipTotal;
	// tipAmount.innerHTML = "$" + (billInput * Number(this.value / 100)).toFixed(2);
	const billTotal = document.querySelector(".bill-total");
	billTotal.innerHTML = billInput + tipTotal;
	// ***Even number tip***
	// tipAmount.innerHTML = Math.round(billInput.value * (this.value / 100));
};

// TIP AMOUNT LOGIC
// add bill amount to tip amount
// ***********

// Bottom Box Selections
const splitPeople = document.querySelector(".split-people");
const splitSlider = document.querySelector("#split-slider");
const splitTip = document.querySelector(".split-tip");
const splitTotal = document.querySelector(".split-total");
//

// tipSlider.oninput = () => {
// 	// Upper Box Logic
// 	const percentage = billInput * (tipPercent / 100);
// 	const billInput = document.querySelector("#bill-amt");

// 	const tipPercent = document.querySelector(".tip-percent").value;

// 	const tipSlider = document.querySelector("#tip-slider");
// 	tipPercent.innerHTML = tipSlider + "%";
// 	document.querySelector(".tip-amount").innerHTML = billInput.value / 7;
// };

// grab bill input value

// divide that by the tip percent value

// Upper Box Logic
// tipAmount.innerHTML = billInput /.value + "%";
