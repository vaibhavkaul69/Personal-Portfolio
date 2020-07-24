/** @format */

document.addEventListener('DOMContentLoaded', () => {
	document.querySelector('.loader').style.cssText = 'opacity:0; display:none;';
	console.log('Body Loaded');
});
const navbarOpenBtn = document.querySelector('.navbar_toggler_icon_open');
const sideNavOpen = document.querySelector('.navbar_top');

document.querySelector('.about').addEventListener('click', () => {
	document.getElementById('about_section').scrollIntoView();
});
document.querySelector('.skills').addEventListener('click', () => {
	document.getElementById('skills_section').scrollIntoView();
});
document.querySelector('.internships').addEventListener('click', () => {
	document.getElementById('internships_section').scrollIntoView();
});
document.querySelector('.projects').addEventListener('click', () => {
	document.getElementById('projects_section').scrollIntoView();
});
document.querySelector('.resume').addEventListener('click', () => {
	document.getElementById('resume_section').scrollIntoView();
});

//Navbar open and close function
navbarOpenBtn.addEventListener('click', () => {
	if (navbarOpenBtn.classList.contains('open_side_nav')) {
		sideNavOpen.style.cssText = 'transform: scale(0);';
		console.log('Button press');
		navbarOpenBtn.classList.remove('open_side_nav');
		navbarOpenBtn.textContent = '☰';
	} else {
		sideNavOpen.style.cssText = 'transform: scale(1);';
		navbarOpenBtn.classList.add('open_side_nav');
		document.querySelector('.open_side_nav').textContent = 'X';
	}
});

var swiper = new Swiper('.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 20,
	loop: false,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	breakpoints: {
		500: {
			slidesPerView: 1,
			spaceBetween: 20,
		},
		640: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		800: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		1024: {
			slidesPerView: 2,
			spaceBetween: 50,
		},
	},
});

setInterval(() => {
	for (i in document.querySelectorAll(' .swiper-pagination-bullet ')) {
		document.querySelectorAll(' .swiper-pagination-bullet ')[i].innerHTML = i;
	}
}, 1000);

let Person = function (name, classname, roll) {
	this.name = name;
	this.branch = classname;
	this.roll = roll;
	console.log(name + ' ' + classname + ' ' + roll);
};
Person.prototype.hostelName = 'Boys Hostel';
let person_1 = new Person('Vaibhav', 'CSE', 17001001062);
console.log(hostelName in person_1);
