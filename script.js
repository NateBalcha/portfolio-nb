// JavaScript Code

let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".nav-links");
let projectContents = document.querySelectorAll(".projectContent");

menuBtn.addEventListener("click", activeClass);

function activeClass() {
  menuBtn.classList.toggle("active");
  menu.classList.toggle("active");
}

const links = document.querySelectorAll(".nav__link");

links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior (navigating to a new page)

    const targetId = this.getAttribute("href").substring(1); // Get the target section id
    const targetSection = document.getElementById(targetId); // Get the target section element

    if (targetSection) {
      // Check if the target section exists
      targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
      menuBtn.classList.remove("active"); // Close the menu by removing the "active" class
      menu.classList.remove("active"); // Close the menu by removing the "active" class
    }
  });
});

let homeSection = document.querySelector(".home");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.scrollY > 60) {
    homeSection.classList.add("active");
  } else {
    homeSection.classList.remove("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".nav__link");

  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the default link behavior (navigating to a new page)

      const targetId = this.getAttribute("href").substring(1); // Get the target section id
      const targetSection = document.getElementById(targetId); // Get the target section element

      if (targetSection) {
        // Check if the target section exists
        targetSection.scrollIntoView({ behavior: "smooth" }); // Scroll to the target section smoothly
      }
    });
  });
});
function checkSlide() {
  projectContents.forEach((projectContent) => {
    const projectImg = projectContent.querySelector(".webImg");
    const paragraph = projectContent.querySelector(".paragraph");
    const slideInAt =
      window.scrollY + window.innerHeight - projectContent.clientHeight / 2;
    const imageBottom = projectContent.offsetTop + projectContent.clientHeight;
    const isHalfShown = slideInAt > projectContent.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if (isHalfShown && isNotScrolledPast) {
      projectImg.style.transform = "translateX(0)";
      paragraph.style.transform = "translateX(0)";
    } else {
      projectImg.style.transform = "translateX(-100%)";
      paragraph.style.transform = "translateX(100%)";
    }
  });
}

window.addEventListener("scroll", checkSlide);
// JavaScript code for displaying the dialog box and handling form submission
document
  .getElementById("comment-button")
  .addEventListener("click", function () {
    document.getElementById("dialog-box").style.display = "block";
  });

document
  .getElementById("comment-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    const comment = document.getElementById("comment").value;
    // You can add an email sending functionality here, typically using a server-side script.
    console.log("Email sent with comment: ", comment);
    document.getElementById("dialog-box").style.display = "none";
    document.getElementById("comment").value = ""; // Clearing the textarea after submission
  });
