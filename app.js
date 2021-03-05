// Upper Box Selections

// Bottom Box Selections
const splitPeople = document.querySelector(".split-people");
const splitSlider = document.querySelector("#split-slider");
const splitTip = document.querySelector(".split-tip");
const splitTotal = document.querySelector(".split-total");

function myFunction() {
	// Upper Box Logic
	const billInput = document.querySelector("#bill-amt").value;
	const tipPercent = document.querySelector(".tip-percent").value;
	const tipSlider = document.querySelector("#tip-slider").value;
	// const tipSlider = document.querySelector("#tip-slider");
	const tipAmount = document.querySelector(".tip-amount");
	const billTotal = document.querySelector(".bill-total");

	tipPercent.innerHTML = tipSlider + "%";
	const percentage = billInput * (tipPercent / 100);
	tipAmount.innerHTML = billInput + tipPercent;
}
