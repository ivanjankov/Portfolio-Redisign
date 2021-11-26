document.addEventListener('DOMContentLoaded', () => {
	// TOGGLE DARK MODE
	const checkbox = document.getElementById('checkbox');
	const mainNav = document.getElementById('main-menu');
	const aboutMe = document.getElementById('about-me');
	const contact = document.getElementById('contact');
	const iconsContact = Array.from(document.querySelectorAll('.icons'));
	const inputs = Array.from(document.querySelectorAll('.form-control'));

	if (localStorage.getItem('mode') == 'light') {
		checkbox.checked = true;
		noDark();
	} else {
		checkbox.checked = false;
		darkMode();
	}

	checkbox.addEventListener('change', () => {
		let mode = localStorage.getItem('mode');
		if (mode !== 'dark') {
			darkMode();
		} else {
			noDark();
		}
		// document.body.classList.add('light');
	});

	function darkMode() {
		localStorage.setItem('mode', 'dark');
		document.body.classList.remove('light');
		aboutMe.classList.remove('light');
		contact.classList.remove('light');
		mainNav.classList.remove('light');
		iconsContact.forEach((img) => {
			img.classList.remove('light');
		});

		inputs.forEach((input) => {
			input.classList.remove('light');
		});
	}
	function noDark() {
		localStorage.setItem('mode', 'light');
		document.body.classList.add('light');
		mainNav.classList.add('light');
		aboutMe.classList.add('light');
		contact.classList.add('light');
		iconsContact.forEach((img) => {
			img.classList.add('light');
		});
		inputs.forEach((input) => {
			input.classList.add('light');
		});
	}
});
