
/* froject 스와이퍼 */
let swiper = new Swiper(".frobox1", {
	slidesPerView: 3,
	centeredSlides: false,
	loop: true,
	spaceBetween: 15,
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
        920: {
            slidesPerView: 3,
        },
        600: {
            slidesPerView: 2,
        },
        0: {
            slidesPerView: 1,
        },
    },

});


/* 모바일 버튼 */
const mobtn = document.getElementById('mobtn');
const moslide = document.getElementById('moslide');
const closeButton = document.getElementById('closebtn');
const mobg = document.getElementById('mobg');
const molist = moslide.querySelectorAll('ul li');


mobtn.addEventListener('click', function() {
    moslide.classList.add('active');
    mobg.classList.add('active');
});

closeButton.addEventListener('click', function() {
    moslide.classList.remove('active');
    mobg.classList.remove('active');
});

mobg.addEventListener('click', function() {
	moslide.classList.remove('active');
	mobg.classList.remove('active');
});

molist.forEach(item => {
    item.addEventListener('click', function() {
        moslide.classList.remove('active');
        mobg.classList.remove('active');
    });
});

/* 로딩 */
const loading = document.querySelector('.mainloading');
const html = document.querySelector('html');

html.style.overflow = 'hidden'; 
window.addEventListener('load', function () {
    setTimeout(function () {
        loading.style.opacity = '0'; 
        html.style.overflow = 'auto';
        loading.style.display = 'none';
    }, 2000);
})