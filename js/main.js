const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const allMobileNavLinks = document.querySelectorAll(".nav__link-mobile");
const footerYear = document.querySelector(".footer__year");
const footer = document.querySelector(".footer");

const handleNav = () => {
	navBtn.classList.toggle("is-active");
	navMobile.classList.toggle("nav-mobile--active");
	document.body.classList.toggle("sticky-body");
};

navBtn.addEventListener("click", handleNav);

allMobileNavLinks.forEach((item) => {
	item.addEventListener("click", () => {
		navBtn.classList.remove("is-active");
		navMobile.classList.remove("nav-mobile--active");
		document.body.classList.remove("sticky-body");
	});
});

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
