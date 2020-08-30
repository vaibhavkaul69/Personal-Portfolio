/** @format */

const navbarOpenBtn = document.querySelector(".navbar_toggler_icon_open");
const sideNavOpen = document.querySelector(".navbar_top");
const aboutSection = document.querySelector(
	".sticky_about > .intro_flex_container"
);
const heroHeading = document.querySelector(".main_head_name");
const profile_name = document.querySelector(".profile_designation");
const knowMoreBtn = document.querySelector(
	"#name_section > .hero-text > button"
);

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".loader").style.cssText = "opacity:0; display:none;";
	console.log("Body Loaded");
	setTimeout(() => {
		heroHeading.style.opacity = "1";
	}, 1000);
	setTimeout(() => {
		profile_name.style.cssText = "transform:translateY(0px);";
	}, 1200);
	setTimeout(() => {
		knowMoreBtn.style.cssText = "transform:translateY(0px);";
	}, 1500);
});

document.querySelector(".about").addEventListener("click", () => {
	document.getElementById("about_section").scrollIntoView();
});
document.querySelector(".skills").addEventListener("click", () => {
	document.getElementById("skills_section").scrollIntoView();
});
document.querySelector(".internships").addEventListener("click", () => {
	document.getElementById("internships_section").scrollIntoView();
});
document.querySelector(".projects").addEventListener("click", () => {
	document.getElementById("projects_section").scrollIntoView();
});
document.querySelector(".resume").addEventListener("click", () => {
	document.getElementById("resume_section").scrollIntoView();
});

//Navbar open and close function
navbarOpenBtn.addEventListener("click", () => {
	if (navbarOpenBtn.classList.contains("open_side_nav")) {
		sideNavOpen.style.cssText = "transform: scale(0);";
		console.log("Button press");
		navbarOpenBtn.classList.remove("open_side_nav");
		navbarOpenBtn.textContent = "☰";
	} else {
		sideNavOpen.style.cssText = "transform: scale(1);";
		navbarOpenBtn.classList.add("open_side_nav");
		document.querySelector(".open_side_nav").textContent = "X";
	}
});

setInterval(() => {
	if (window.innerWidth >= 575) {
		sideNavOpen.style.cssText = "transform: scale(1);display:flex;";
		navbarOpenBtn.classList.add("open_side_nav");
	}
}, 1000);

setInterval(() => {
	if (window.scrollY <= 525) {
		aboutSection.style.cssText = "opacity: 0;";
	} else {
		aboutSection.style.cssText = "opacity: 1;";
	}
}, 1000);
setInterval(() => {
	if (window.scrollY <= 2928) {
		document.querySelector(".resume-placeholder").style.cssText = "	opacity: 0;";
	} else {
		document.querySelector(".resume-placeholder").style.cssText = "	opacity: 1;";
	}
}, 1000);
