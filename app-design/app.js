function Menu() {
	let menu = document.getElementById("menu-content");
	menu.classList.toggle("show-menu");

	let menuButton = document.getElementById("menu-button");
	menuButton.classList.toggle("menu-highlight");
}



function NotReady() {
	let readyNotice = document.getElementById("not-ready");
	readyNotice.classList.add("display-not-ready");

	// Reset the classList
	setTimeout(ResetNotReady, 3600)
}

function ResetNotReady() {
	let readyNotice = document.getElementById("not-ready");
	readyNotice.classList.remove("display-not-ready");
}