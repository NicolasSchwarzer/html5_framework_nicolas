~function() {

	window.addEventListener('load', function() {

		var body = document.body,
			islock = false, isMoving = false, isUpDirection = true, startTop = 0,
			slides = $$('article > article'), moveSlide;

		function getPreviousSlide(slide) {

			if (slide.previousElementSibling) {
				return slide.previousElementSibling;
			}
			else {
				return slide.parentElement.lastElementChild;
			}

		}

		function getNextSlide(slide) {

			if (slide.nextElementSibling) {
				return slide.nextElementSibling;
			}
			else {
				return slide.parentElement.firstElementChild;
			}

		}

		body.addEventListener('touchstart', function(e) {

			if (islock) {
				return;
			}

			startTop = e.touches[0].clientY;

		});

		body.addEventListener('touchmove', function(e) {

			var windowHeight = window.innerHeight,
				touchTop = e.touches[0].clientY;

			if (islock) {
				return;
			}

			if (!isMoving) {
				isMoving = true;
				isUpDirection = touchTop < startTop ? true : false;
				moveSlide = isUpDirection ? getNextSlide($('article > .is-current-slide')) :
											getPreviousSlide($('article > .is-current-slide'));
			}

			if (moveSlide) {
				moveSlide.style.top = (isUpDirection ? windowHeight - startTop + touchTop :
												  touchTop - startTop - windowHeight) + 'px';
			}

		});

		body.addEventListener('touchend', function(e) {

			if (islock) {
				return;
			}

			islock = true;
			isMoving = false;

			if (moveSlide) {
				moveSlide.radioCls('sliding');
				moveSlide.style.top = '0';

				setTimeout(
					function() {

						if (isUpDirection) {
							getPreviousSlide(moveSlide).style.top = '-100%';
						}
						else  {
							getNextSlide(moveSlide).style.top = '100%';
						}

						moveSlide.radioCls('is-current-slide');

						islock = false;

					},
					500
				);
			}
			else {

				islock = false;
			}

		});

	});

}();