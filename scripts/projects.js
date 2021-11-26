document.addEventListener('DOMContentLoaded', () => {
	// DARK MODE
	const checkbox = document.getElementById('checkbox');
	const mainNav = document.getElementById('main-menu');
	const descriptionCard = Array.from(
		document.querySelectorAll('.description-card')
	);

	checkbox.addEventListener('change', () => {
		console.log('hello');
	});

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
	});

	function darkMode() {
		localStorage.setItem('mode', 'dark');
		document.body.classList.remove('light');
		mainNav.classList.remove('light');
		descriptionCard.forEach((card) => {
			card.classList.remove('light');
		});
	}
	function noDark() {
		localStorage.setItem('mode', 'light');
		document.body.classList.add('light');
		mainNav.classList.add('light');
		descriptionCard.forEach((card) => {
			card.classList.add('light');
		});
	}

	// SLIDER FUNCTIONALITY
	const sliderImages = Array.from(document.querySelectorAll('.slider-img'));
	const sliderCircles = Array.from(document.querySelectorAll('.slider-circle'));
	const rightArrowSlider = document.getElementById('right-arrow-slider');
	const leftArrowSlider = document.getElementById('left-arrow-slider');
	index = 0;
	rightArrowSlider.addEventListener('click', () => {
		index++;
		if (index > sliderImages.length - 1) {
			index = 0;
		}
		changeImage(sliderImages, sliderCircles);
	});
	leftArrowSlider.addEventListener('click', () => {
		index--;

		if (index < 0) {
			index = sliderImages.length - 1;
		}
		changeImage(sliderImages, sliderCircles);
	});

	function changeImage(array, circle) {
		for (let i = 0; i < array.length; i++) {
			if (i !== index) {
				array[i].classList.add('img-hidden');
				circle[i].classList.remove('circle-filled');
			} else {
				array[i].classList.remove('img-hidden');
				circle[index].classList.add('circle-filled');
			}
		}
	}
});
