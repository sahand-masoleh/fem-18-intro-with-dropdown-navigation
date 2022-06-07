const dropDowns = document.querySelectorAll(".nav__summary");
document.addEventListener("click", closeDropdowns);

function closeDropdowns() {
	for (let dropDown of dropDowns) {
		navItem = dropDown.parentElement;
		if (navItem.open) navItem.open = false;
	}
}
