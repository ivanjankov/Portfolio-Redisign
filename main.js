document.addEventListener('DOMContentLoaded', () => {
	// TOGGLE DARK MODE
	const checkbox = document.getElementById('checkbox');
	const mainNav = document.getElementById('main-menu');
	const aboutMe = document.getElementById('about-me');
	const contact = document.getElementById('contact');

	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('light');
		aboutMe.classList.toggle('light');
		contact.classList.toggle('light');
		mainNav.classList.toggle('light');
	});
});
