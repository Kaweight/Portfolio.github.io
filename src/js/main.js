const navBtn = document.querySelector(".hamburger");
const navMobile = document.querySelector(".nav-mobile");
const allMobileNavLinks = document.querySelectorAll(".nav__link");
const btnCurr = document.querySelector("#currently");
const btnPrev = document.querySelector("#previously");
const expCurr = document.querySelector(".experience__currently");
const expPrev = document.querySelector(".experience__previously");
const footerYear = document.querySelector(".footer__year");
const btnScroll = document.querySelector(".scroll-to-up");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");

const handleNav = () => {
  navBtn.classList.toggle("is-active");
  navMobile.classList.toggle("nav-mobile--active");
  main.classList.add("main-off");

  allMobileNavLinks.forEach((item) => {
    item.addEventListener("click", () => {
      main.classList.remove("main-off");
      navMobile.classList.remove("nav-mobile--active");
      navBtn.classList.remove("is-active");
    });
  });
};

const handleCurrently = () => {
  expCurr.style.display = "block";
  expPrev.classList.add("experience__previously-active");
};

const handlePreviously = () => {
  expCurr.style.display = "none";
  expPrev.classList.remove("experience__previously-active");
};

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.innerText = year;
};

const handleScrollBar = () => {
  const scroll = window.scrollY;

  const leftToScroll =
    document.body.getBoundingClientRect().height - window.innerHeight;
  const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100);

  scrollBarWidth > 80
    ? btnScroll.classList.add("scroll-to-up-active")
    : btnScroll.classList.remove("scroll-to-up-active");
};

handleCurrentYear();
navBtn.addEventListener("click", handleNav);
btnCurr.addEventListener("click", handleCurrently);
btnPrev.addEventListener("click", handlePreviously);
window.addEventListener("scroll", handleScrollBar);
