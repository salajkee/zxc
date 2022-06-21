window.addEventListener('DOMContentLoaded', () => {
	//hamburger menu 
	const hamburger = document.querySelector('.hamburger');
	const mobMenu = document.querySelector('.header__mobile-menu');

	hamburger.addEventListener('click', (e) => {
		e.preventDefault();
		mobileMenu();
	});

	function mobileMenu() {
		hamburger.classList.toggle('active');
		mobMenu.classList.toggle('active');
		document.body.classList.toggle('no-scroll');
	}
	
	try {
		const servicesLink = document.querySelector('.services__link');
		const teamLink = document.querySelector('.team__link');
		const header = document.querySelector('.header');
		const logo = document.querySelector('.logo');
		const servicesTabsList = document.querySelectorAll('.services__tabs-list');
		const teamTabsList = document.querySelectorAll('.team__tabs-list');
		const screenWidth = window.screen.width
	
		servicesLink.addEventListener('mouseover', showMenu);
		servicesLink.addEventListener('mouseout', hideMenu);
	
		teamLink.addEventListener('mouseover', showMenu);
		teamLink.addEventListener('mouseout', hideMenu);
	
		if(screenWidth < 1340) {
			servicesTabsList.forEach(link => {
				link.onclick = null;
			});
			teamTabsList.forEach(link => {
				link.onclick = null;
			});
		} else {
			servicesTabsList.forEach(link => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
				});
			});
			teamTabsList.forEach(link => {
				link.addEventListener('click', (e) => {
					e.preventDefault();
				});
			});
		}
	
	
		function showMenu() {
			header.classList.add('white');
			logo.classList.add('logo-white');
			changeLogo();
		}
	
		function hideMenu() {
			header.classList.remove('white');
			logo.classList.remove('logo-white');
			changeLogo();
		}
	
		function changeLogo() {
			if(logo.classList.contains('logo-white')) {
				logo.innerHTML = `<img src="images/logo.svg" alt="logo">`;
			} else {
				logo.innerHTML = `<img src="images/logo-white.svg" alt="logo">`;;
			}
		}
	} catch(e) {}
	
	try {
		// Yandex map
		let center = [25.097174896567918,55.175672473909586];
	
		function init() {
			let map = new ymaps.Map('map', {
				center: center,
				zoom: 15
			});
		
			let placemark = new ymaps.Placemark(center, {
				balloonContentHeader: `
				
					<div class="balloon">
						<div class="balloon__name">Al shafar Tower 1</div>
						<a href="#" class="balloon__info">Directions</a>
					</div>
				
				`
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'https://cdn-icons.flaticon.com/png/512/2776/premium/2776067.png?token=exp=1655487928~hmac=e629ed698f0272ba764de549b7eb28d3',
				iconImageSize: [64, 64],
				iconImageOffset: [-30, -64]
			});
		
			map.behaviors.disable(['scrollZoom']);
			map.geoObjects.add(placemark);
		
			if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
				map.behaviors.disable(['drag']);
			}
		}
		
		ymaps.ready(init);
	} catch(e) {}
	
	try {
		gsap.registerPlugin(ScrollTrigger);
	
		gsap.to('.quote__img', {
			scrollTrigger: {
				trigger: '.quote__img',
				scrub: 1,
				toggleActions: 'restart pause reverse pause'
			},
			y: -100,
			duration: 10
		});
		gsap.to('.quote__img-2', {
			scrollTrigger: {
				trigger: '.quote__img-2',
				scrub: 1,
				toggleActions: 'restart pause reverse pause'
			},
			y: -100,
			duration: 10
		});
		gsap.to('.quote__img-3', {
			scrollTrigger: {
				trigger: '.quote__img-3',
				scrub: 1,
				toggleActions: 'restart pause reverse pause'
			},
			y: -100,
			duration: 10
		});
		
	} catch(e) {}
	
	try {
		// Slider
		var mySwiper = new Swiper ('.intro__slider', {
			loop: true,
			autoplay: {
				delay: 5000,
				waitForTransition: true,
				disableOnInteraction: false,
			},
			effect: "fade",
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: function(index, className) {
					return '<span class="' + className + '">'+'<svg class="fp-arc-loader" width="21.3" height="21.3" viewBox="0 0 21.3 21.3">'+
							'<circle class="path" cx="10.6" cy="10.6" r="7.3" fill="none" transform="rotate(-90 10.6 10.6)" stroke="#FFF"'+
							'stroke-opacity="1" stroke-width="2px"></circle>'+
					'<circle cx="10.6" cy="10.6" r="4" fill="#FFF"></circle>'+
							'</svg></span>';
				}
			},
		  })
	
		let swiper1 = new Swiper('.team__slider', {
			slidesPerView: 'auto',
			spaceBetween: 40,
			navigation: {
				nextEl: ".team__next",
				prevEl: ".team__prev",
			},
			breakpoints: {
				320: {
					slidesPerView: 1.2,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
				  slidesPerView: 2.5,
				  spaceBetween: 40,
				},
				992: {
				  slidesPerView: 3.5,
				  spaceBetween: 40,
				},
				1340: {
				  slidesPerView: 3.5,
				  spaceBetween: 40,
				},
			},
		});
	
		let swiper3 = new Swiper(".journal__slider", {
			slidesPerView: 'auto',
			spaceBetween: 50,
			pagination: {
				el: '.pagination',
				clickable: true
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				480: {
					slidesPerView: 1.5,
					spaceBetween: 30,
				},
				640: {
				  slidesPerView: 'auto',
				  spaceBetween: 50,
				},
			},
		});
	} catch(e) {}
	
	try {
		// Modal
	
		const modalTrigger = document.querySelectorAll('[data-modal]'),
				modal = document.querySelector('.modal'),
				modalCloseBtn = document.querySelector('[data-close]'),
				scroll = calcScroll();
	
		modalTrigger.forEach(btn => {
			btn.addEventListener('click', () => {
				modal.classList.add('show-modal');
				modal.classList.remove('hide-modal');
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
			});
		});
	
		// function dlya togo wtobi ne ispolzovat kod 2 raza
		function closeModal() {
			modal.classList.add('hide-modal');
			modal.classList.remove('show-modal');
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}
	
		modalCloseBtn.addEventListener('click', closeModal);
	
		// zakrivaetsya pri klike na body
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});
	
		// zakrivaetsya pri najatiy esc
		document.addEventListener('keydown', (e) => {
			if (e.code === "Escape" && modal.classList.contains('show-modal')) {
				closeModal();
			}
		});
	
		function calcScroll() {
			let div = document.createElement('div');
	
			div.style.width = '50px';
			div.style.height = '50px';
			div.style.overflowY = 'scroll';
			div.style.visibility = 'hidden';
	
			document.body.appendChild(div);
			let scrollWidth = div.offsetWidth - div.clientWidth;
			div.remove();
	
			return scrollWidth;
		}
	} catch(e) {}
	
	try {
	
		// Modal2
	
		const modalTrigger = document.querySelectorAll('[data-modal2]'),
				modal = document.querySelector('.modal2'),
				modalCloseBtn = document.querySelector('[data-close2]'),
				scroll = calcScroll();
	
		modalTrigger.forEach(btn => {
			btn.addEventListener('click', () => {
				modal.classList.add('show-modal');
				modal.classList.remove('hide-modal');
				document.body.style.overflow = 'hidden';
				document.body.style.marginRight = `${scroll}px`;
			});
		});
	
		// function dlya togo wtobi ne ispolzovat kod 2 raza
		function closeModal() {
			modal.classList.add('hide-modal');
			modal.classList.remove('show-modal');
			document.body.style.overflow = '';
			document.body.style.marginRight = `0px`;
		}
	
		modalCloseBtn.addEventListener('click', closeModal);
	
		// zakrivaetsya pri klike na body
		modal.addEventListener('click', (e) => {
			if (e.target === modal) {
				closeModal();
			}
		});
	
		// zakrivaetsya pri najatiy esc
		document.addEventListener('keydown', (e) => {
			if (e.code === "Escape" && modal.classList.contains('show-modal')) {
				closeModal();
			}
		});
	
		function calcScroll() {
			let div = document.createElement('div');
	
			div.style.width = '50px';
			div.style.height = '50px';
			div.style.overflowY = 'scroll';
			div.style.visibility = 'hidden';
	
			document.body.appendChild(div);
			let scrollWidth = div.offsetWidth - div.clientWidth;
			div.remove();
	
			return scrollWidth;
		}
	} catch(e) {}
	
	try {
		//dropdown (select)
		const ddSelect = document.querySelector('.signing__form-dropdown-select');
		const select = document.querySelector('.signing__form-dropdown');
		const options = document.querySelectorAll('.signing__form-option');
		const selectLabel = document.querySelector('.signing__form-select-label');
		const selectArrow = document.querySelector('.signing__form-dropdown-arrow');
	
		ddSelect.addEventListener('click', (e) => {
			e.preventDefault();
			toggleHidden();
		});
	
		function toggleHidden() {
			select.classList.toggle('hidden');
			selectArrow.classList.toggle('active');
		}
	
		options.forEach(function(option) {
			option.addEventListener('click', (e) => {
				setSelectTitle(e);
			});
		});
	
	
		function setSelectTitle(e) {
			const labelElement = document.querySelector(`label[for="${e.target.id}"]`).innerText;
			selectLabel.innerText = labelElement;
			toggleHidden();
		}
	} catch(e) {}
	
	try{
		let maskPhone = document.querySelector('.phone');
		let maskPhone2 = document.querySelector('.phone2');
		let maskPhone3 = document.querySelector('.phone3');
	
		let maskOptions = {
			mask: "+971 00 00 00 000",
			lazy: false
		}
	
		let mask = new IMask(maskPhone, maskOptions);
		let mask2 = new IMask(maskPhone2, maskOptions);
		let mask3 = new IMask(maskPhone3, maskOptions);
	} catch(e) {}
	
	try {
		//Services menu tabs
	
		const screenWidth = window.screen.width
		
		if(screenWidth > 1340) {
			const tabs = document.querySelectorAll('.services__tabs-list'),
			  tabsContent = document.querySelectorAll('.services__tabs-catalog'),
			  tabsParent = document.querySelector('.services__tabs');
	
			function hideTabContent() {
				tabsContent.forEach(item => {
					item.classList.add('hide');
					item.classList.remove('show-df', 'fade');
				});
	
				tabs.forEach(item => {
					item.classList.remove('services__tabs-list-active');
				});
			}
	
			function showTabContent(i = 0) {
				tabsContent[i].classList.add('show-df', 'fade');
				tabsContent[i].classList.remove('hide');
				tabs[i].classList.add('services__tabs-list-active');
			}
	
			hideTabContent();
			showTabContent();
	
			tabsParent.addEventListener('click', (event) => {
				const target = event.target;
	
				if (target && target.classList.contains('services__tabs-list')) {
					tabs.forEach((item, i) => {
						if (target == item) {
							hideTabContent();
							showTabContent(i);
						}
					});
				}
			});
		}
	} catch(e) {}
	
	try {
		//Team menu tabs
	
		const screenWidth = window.screen.width
	
		if(screenWidth > 1340) {
			const tabs = document.querySelectorAll('.team__tabs-list'),
			tabsContent = document.querySelectorAll('.team__tabs-catalog'),
			tabsParent = document.querySelector('.team__tabs');
	
			function hideTabContent() {
				tabsContent.forEach(item => {
					item.classList.add('hide');
					item.classList.remove('show-df', 'fade');
				});
	
				tabs.forEach(item => {
					item.classList.remove('team__tabs-list-active');
				});
			}
	
			function showTabContent(i = 0) {
				tabsContent[i].classList.add('show-df', 'fade');
				tabsContent[i].classList.remove('hide');
				tabs[i].classList.add('team__tabs-list-active');
			}
	
			hideTabContent();
			showTabContent();
	
			tabsParent.addEventListener('click', (event) => {
				const target = event.target;
	
				if (target && target.classList.contains('team__tabs-list')) {
					tabs.forEach((item, i) => {
						if (target == item) {
							hideTabContent();
							showTabContent(i);
						}
					});
				}
			});
		}
	} catch(e) {}
	
	try {
		const formBtn = document.querySelectorAll('.submit-btn');
		const modalBtn = document.querySelectorAll('.modal__form-btn');
		const modal2Btn = document.querySelectorAll('.modal2__form-btn');
		formBtn.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
			});
		});
		modalBtn.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
			});
		});
		modal2Btn.forEach(btn => {
			btn.addEventListener('click', (e) => {
				e.preventDefault();
			});
		});
	} catch(e) {}
	
	try {
		const accordion = document.querySelectorAll('.faq__accordion');
	
		accordion.forEach((item) => {
			let accordionHead = item.querySelector('.faq__accordion-head');
			accordionHead.addEventListener('click', () => {
				item.classList.toggle('open');
	
				let accordionIcon = item.querySelector('.faq__accordion-head-icon');
				let accordionBody = item.querySelector('.faq__accordion-body');
				if(item.classList.contains('open')) {
					accordionBody.style.height = `${accordionBody.scrollHeight}px`;
					accordionHead.style.paddingBottom= '40px';
					accordionIcon.innerHTML = `<img src="images/icons/minus-icon.svg" alt="">`;
				} else {
					accordionBody.style.height = '0px';
					accordionHead.style.paddingBottom = '20px';
					accordionIcon.innerHTML = `<img src="images/icons/plus-icon.svg" alt="">`;
				}
			});
		});
	} catch(e) {}
	
	try {
		const cards = document.querySelectorAll('.journal-p__item'),
			  showMoreBtn = document.querySelector('.journal-p__show-more-btn'),
			  showMoreBlock = document.querySelector('.journal-p__show-more-block');
	
		showMoreBtn.addEventListener('click', () => {
			cards.forEach(card => {
				card.classList.remove('hidden');
			});
			showMoreBlock.remove();
		});
	} catch(e) {}
	
	try {
		const videoInit=  (selector) => {
			const videos = document.querySelectorAll(selector);
	
			if(videos.length > 0) {
				videos.forEach(video => {
					videoGenerate(video)
				});
			}
		}
		
		const videoGenerate = (video) => {
			const videoBtn = document.querySelector('.news__video-btn');
			const videoID = videoBtn.dataset.videoId;
			const container = video.querySelector('.news__video-block');
	
			videoBtn.addEventListener('click', () => {
				const iframe = iframeGenerate(videoID);
	
				container.innerHTML = '';
				container.appendChild(iframe);
			});
		}
	
		const iframeGenerate = (videoID) => {
			const iframe = document.createElement('iframe');
	
			const src = `https://www.youtube.com/embed/${videoID}?rel-0&showinfo=0&autoplay=1&mute=1`;
	
			iframe.setAttribute('src', src);
			iframe.setAttribute('frameborder', '0');
			iframe.setAttribute('allow', 'autoplay');
			iframe.setAttribute('allowfullscreen', '');
			iframe.classList.add('news__video-block-content');
	
			return iframe;
		}
	
		videoInit('.news__video');
	} catch(e) {}
	
	try {
		;(function() {
			var catalogSection = document.querySelector('.ip-filter');
	
			if (catalogSection === null) {
				return;
			}
	
			var removeChildren = function(item) {
				while (item.firstChild) {
					item.removeChild(item.firstChild);
				}
			};
	
			var updateChildren = function(item, children) {
				removeChildren(item);
				for (var i = 0; i < children.length; i += 1) {
					item.appendChild(children[i]);
				}
			};
	
			closestItemByClass = function(item, className) {
				var node = item;
	
				while(node) {
					if(node.classList.contains(className)) {
						return node;
					}
	
					node = node.parentElement;
				}
	
				return null;
			};
	
			var catalog = catalogSection.querySelector('.ip-filter__items');
			var catalogNav = catalogSection.querySelector('.ip-filter__nav');
			var catalogItems = catalogSection.querySelectorAll('.ip-filter__item');
	
			catalogNav.addEventListener('click', function(e) {
				var target = e.target;
				var item = closestItemByClass(target, 'ip-filter__nav-btn');
	
				if(item === null || item.classList.contains('is-active')) {
					return;
				}
	
				e.preventDefault();
	
				var filterValue = item.getAttribute('data-filter');
				var previousBtnActive = catalogNav.querySelector('.ip-filter__nav-btn.is-active');
	
				previousBtnActive.classList.remove('is-active');
				item.classList.add('is-active');
	
				if(filterValue === 'all') {
					updateChildren(catalog, catalogItems);
					return;
				}
	
				var filterdfItems = [];
				for (var i = 0; i < catalogItems.length; i += 1) {
					var current = catalogItems[i];
					if(current.getAttribute('data-category') === filterValue) {
						filterdfItems.push(current);
					}
				}
	
				updateChildren(catalog, filterdfItems);
			});
		})();
	} catch(e) {}
	
	try {
		;(function() {
			var catalogSection = document.querySelector('.ot-filter');
	
			if (catalogSection === null) {
				return;
			}
	
			var removeChildren = function(item) {
				while (item.firstChild) {
					item.removeChild(item.firstChild);
				}
			};
	
			var updateChildren = function(item, children) {
				removeChildren(item);
				for (var i = 0; i < children.length; i += 1) {
					item.appendChild(children[i]);
				}
			};
	
			closestItemByClass = function(item, className) {
				var node = item;
	
				while(node) {
					if(node.classList.contains(className)) {
						return node;
					}
	
					node = node.parentElement;
				}
	
				return null;
			};
	
			var catalog = catalogSection.querySelector('.ot-filter__items');
			var catalogNav = catalogSection.querySelector('.ot-filter__nav');
			var catalogItems = catalogSection.querySelectorAll('.ot-filter__item');
	
			catalogNav.addEventListener('click', function(e) {
				var target = e.target;
				var item = closestItemByClass(target, 'ot-filter__nav-btn');
	
				if(item === null || item.classList.contains('is-active')) {
					return;
				}
	
				e.preventDefault();
	
				var filterValue = item.getAttribute('data-filter');
				var previousBtnActive = catalogNav.querySelector('.ot-filter__nav-btn.is-active');
	
				previousBtnActive.classList.remove('is-active');
				item.classList.add('is-active');
	
				if(filterValue === 'all') {
					updateChildren(catalog, catalogItems);
					return;
				}
	
				var filterdfItems = [];
				for (var i = 0; i < catalogItems.length; i += 1) {
					var current = catalogItems[i];
					if(current.getAttribute('data-category') === filterValue) {
						filterdfItems.push(current);
					}
				}
	
				updateChildren(catalog, filterdfItems);
			});
		})();
	} catch(e) {}
	
	try {
		AOS.init();
	
		
		// You can also pass an optional settings object
		// below listed default settings
		AOS.init({
			// Global settings:
			disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
			startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
			initClassName: 'aos-init', // class applied after initialization
			animatedClassName: 'aos-animate', // class applied on animation
			useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
			disableMutationObserver: false, // disables automatic mutations' detections (advanced)
			debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
			throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
			
		
			// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
			offset: 120, // offset (in px) from the original trigger point
			delay: 0, // values from 0 to 3000, with step 50ms
			duration: 400, // values from 0 to 3000, with step 50ms
			easing: 'ease', // default easing for AOS animations
			once: false, // whether animation should happen only once - while scrolling down
			mirror: false, // whether elements should animate out while scrolling past them
			anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
	  });
	} catch(e) {}
});