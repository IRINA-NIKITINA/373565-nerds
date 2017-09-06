
var link = document.querySelector(".footer-button");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal-button-close");
var form = popup.querySelector("form");
var login = form.querySelector("[name=name");
var email = form.querySelector("[name=email]");
var mail = form.querySelector("[name=mail]");
var storageLogin = localStorage.getItem("login");
var storageEmail = localStorage.getItem("email");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");

	if (storageLogin) {
		login.value = storageLogin;
		email.focus();
	}
	else {
		login.focus();
	}
	
	if (storageEmail) {
		email.value = storageEmail;
	}

	if (storageLogin && storageEmail) {
		mail.focus();
	}
});

close.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !email.value || !mail.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	}
	else {
		localStorage.setItem("login", login.value);
		localStorage.setItem("email", email.value);
	}
});

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode == 27) {
		if (popup.classList.contains("modal-show")) {
			popup.classList.remove("modal-show");
			popup.classList.remove("modal-error");
		}
	}
});
