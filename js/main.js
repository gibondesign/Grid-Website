const navMobile = document.querySelector(".nav-mobile");
const navBtn = document.querySelector(".hamburger");
const footerYear = document.querySelector(".footer__year");
const footer = document.querySelector(".footer")

const handleNav = () => {
    navBtn.classList.toggle("is-active")
    navMobile.classList.toggle("nav-mobile--active")
    footer.classList.toggle("footer--disable")
}

navBtn.addEventListener("click", handleNav)



const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};
handleCurrentYear();
