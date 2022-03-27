const btnTheme = document.querySelector(".theme-container");
const nav = document.querySelector(".header");
const sectionAbout = document.querySelector(".section-about");

// Toggle dark mode
btnTheme.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Mobile navigation
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    nav.classList.toggle("nav-open");
  });

// Smooth Scroll

nav.addEventListener("click", function (e) {
  e.preventDefault();
  const id = e.target.getAttribute("href");
  // console.log(id);
  if (id === "#") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else if (id === `resume`) {
    window.location.href = `resume/Vishnu's Resume.pdf`;
    window.location.target = "_blank";
  } else if (e.target.classList.contains("main-nav-link")) {
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });

    //Close Mobile nav
    nav.classList.toggle("nav-open");
  }

  // if (e.target.classList.contains("main-nav-link")) {
  // }
});

// Sticky Navigation
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  entries.forEach((entry) => {
    // console.log(entry);
    if (!entry.isIntersecting) document.body.classList.add("sticky");
    else document.body.classList.remove("sticky");
  });
};

const sectionAboutObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

sectionAboutObserver.observe(sectionAbout);
