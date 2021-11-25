document.addEventListener('DOMContentLoaded', () => {
	// TOGGLE DARK MODE
	const checkbox = document.getElementById('checkbox');
	// const mainNav = document.getElementById('main-menu');
	// const aboutMe = document.getElementById('about-me');
	// const contact = document.getElementById('contact');

	if (localStorage.getItem('mode') == 'light') {
		checkbox.checked = true;
		document.body.classList.add('light');
	} else {
		checkbox.checked = false;
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
	}
	function noDark() {
		localStorage.setItem('mode', 'light');
		document.body.classList.add('light');
		aboutMe.classList.add('light');
		contact.classList.add('light');
		mainNav.classList.add('light');
	}
});
