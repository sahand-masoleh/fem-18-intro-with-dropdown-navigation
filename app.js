const dropDowns = document.querySelectorAll(".nav__summary");
document.addEventListener("click", closeDropdowns);

function closeDropdowns(event) {
	for (let dropDown of dropDowns) {
		navItem = dropDown.parentElement;
		navItem.open = false;
	}
}
