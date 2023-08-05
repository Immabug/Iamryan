const nav = document.querySelector(".nav");
const navH1 = document.querySelector(".nav-h1");

/*fixed nav appearance*/
window.addEventListener("scroll", () => {
  const navHeight = nav.getBoundingClientRect().height;
  const position = window.scrollY;
  if (position > navHeight) {
    nav.classList.remove("nav");
    nav.classList.add("fixed-nav");
    navH1.style.display = "none";
  } else {
    nav.classList.remove("fixed-nav");
    nav.classList.add("nav");
    navH1.style.display = "block";
  }
});

/*burger menu*/
const link = document.querySelector(".link");
const linkContainer = document.querySelector(".link-container");
const navToggle = document.querySelector(".burger");

navToggle.addEventListener("click", () => {
  const linkHeight = link.getBoundingClientRect().height;
  const linkContainerHeight = linkContainer.getBoundingClientRect().height;
  console.log(linkContainerHeight);
  if (linkContainerHeight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
    navToggle.style.transform = `rotate(90deg)`;
  } else {
    linkContainer.style.height = 0;
    navToggle.style.transform = `rotate(0deg)`;
  }
});

window.addEventListener("resize", () => {
  const screenWidth = window.innerWidth;
  if (screenWidth > 640) {
    linkContainer.style.height = "fit-content";
  }
});
