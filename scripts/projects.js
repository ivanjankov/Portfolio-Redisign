document.addEventListener('DOMContentLoaded', () => {
	// DARK MODE

	console.log(localStorage);

	if (localStorage.getItem('mode') == 'light') {
		document.body.classList.add('light');
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
