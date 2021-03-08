// NOTE**
// Sometimes (Total bill/person) may be one penny over actual bill, to cover total bill
// NOTE**

// Upper Box Selections

const tipPercent = document.querySelector(".tip-percent");
const tipSlider = document.querySelector("#tip-slider");

tipSlider.oninput = function () {
	const billInput = Number(document.querySelector("#bill-amt").value);
	tipPercent.innerHTML = this.value + "%";

	//Discovered that number input type returns a string
	//You can wrap multiple variables in parenthesis in order to append methods
	let tipAmount = document.querySelector(".tip-amount");
	// if a variable is referenced but not defined, it will be added to the window element
	tipTotal = Number((billInput * Number(this.value / 100)).toFixed(2));

	tipAmount.innerHTML = "$" + tipTotal.toFixed(2);
	// tipAmount.innerHTML = "$" + (billInput * Number(this.value / 100)).toFixed(2);
	const billTotal = document.querySelector(".bill-total");

	billForSplit = Number(billInput + tipTotal).toFixed(2);

	billTotal.innerHTML =
		"<strong>$</strong>" + "<strong>" + billForSplit + "</strong>";
};

// Bottom Box Selections

// -Grab slider value
const splitSlider = document.querySelector("#split-slider");

splitSlider.oninput = function () {
	// -Grab split person value-split PERSON for 1, people for more than 1
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
	// -grab tip amount from box 1

	// - tip per person equals tip amount / split slider value
	splitTip.innerHTML = (tipTotal / splitSlider.value).toFixed(2);
	// -total bill/person = billTotal / splitPerson
	splitTotal.innerHTML =
		"<strong>$</strong>" +
		"<strong>" +
		(billForSplit / splitSlider.value).toFixed(2) +
		"</strong>";
};
