document.addEventListener('DOMContentLoaded', () => {
	const checkbox = document.getElementById('checkbox');
	const mainNav = document.getElementById('main-menu');
	checkbox.addEventListener('change', () => {
		document.body.classList.toggle('light');
		mainNav.classList.toggle('light');
	});
});
