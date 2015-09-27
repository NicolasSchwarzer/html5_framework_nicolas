~function() {

	window.addEventListener('load', function() {

		var body = document.body,
			islock = false, isMoving = false, isUpDirection = true, startTop = 0,
			slides = $$('article > article'), moveSlide,
			audio = $('audio'), audioBlock = audio.parentElement;

		function getPreviousSlide(slide) {

			if (slide.previousElementSibling) {
				return slide.previousElementSibling;
			}
			else {
				var previousSlide = slide.parentElement.lastElementChild;

				return previousSlide === slide ? null : previousSlide;
			}

		}

		function getNextSlide(slide) {

			if (slide.nextElementSibling) {
				return slide.nextElementSibling;
			}
			else {
				var nextSlide = slide.parentElement.firstElementChild;

				return nextSlide === slide ? null : nextSlide;
			}

		}

		function pageContentAnimate(slide) {
			if (slide) {

				var slideImg = slide.querySelector('article > article > section:nth-of-type(1) > img'),
					slideSentence1 = slide.querySelector('article > article > section:nth-of-type(2) > div:nth-of-type(1)'),
					slideSentence2 = slide.querySelector('article > article > section:nth-of-type(2) > div:nth-of-type(2)');

				slideImg.addCls('enlarging');
				slideImg.style.transform = 'scale(1)';

				setTimeout(
					function() {

						slideSentence1.addCls('showup');
						slideSentence1.style.opacity = 1;
						slideSentence1.style.top = '0';
					},
					500
				);

				setTimeout(
					function() {

						slideSentence2.addCls('showup');
						slideSentence2.style.opacity = 1;
						slideSentence2.style.top = '68px';
					},
					1000
				);
				
			}
		}

		function pageContentReset(slide) {
			if (slide) {

				var slideImg = slide.querySelector('article > article > section:nth-of-type(1) > img'),
					slideSentence1 = slide.querySelector('article > article > section:nth-of-type(2) > div:nth-of-type(1)'),
					slideSentence2 = slide.querySelector('article > article > section:nth-of-type(2) > div:nth-of-type(2)');

				slideImg.removeCls('enlarging');
				slideImg.style.transform = 'scale(0.3)';

				slideSentence1.removeCls('showup');
				slideSentence1.style.opacity = 0;
				slideSentence1.style.top = '50px';	

				slideSentence2.removeCls('showup');
				slideSentence2.style.opacity = 0;
				slideSentence2.style.top = '118px';
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

				pageContentAnimate(moveSlide);
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

						var lastSlide;

						if (isUpDirection) {
							lastSlide = getPreviousSlide(moveSlide);
							lastSlide.style.top = '-100%';
						}
						else  {
							lastSlide = getNextSlide(moveSlide);
							lastSlide.style.top = '100%';
						}

						pageContentReset(lastSlide);

						moveSlide.radioCls('is-current-slide');

						islock = false;

					},
					1000
				);
			}
			else {

				islock = false;
			}

		});

		audio.addEventListener('play', function() {

			audioBlock.addCls('on-playing');

		});

		audio.addEventListener('pause', function() {

			audioBlock.removeCls('on-playing');

		});

		audioBlock.addEventListener('touchstart', function() {

			if (audioBlock.hasCls('on-playing')) {
				audio.pause();
			}
			else {
				audio.play();
			}

		});

		pageContentAnimate($('article > .is-current-slide'));

	});

}();