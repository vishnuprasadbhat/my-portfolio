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
  } else if (id === "newSite") {
    window.open("https://vishnuprasadbhat-portfolio.vercel.app/", "_blank");
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

// Get the modal
const modal = document.getElementById("myModal");
// Get the button that opens the modal
const btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

const showModal = () => {
  modal.style.display = "block";
};

// Open modal when the page loads
window.onload = showModal;
