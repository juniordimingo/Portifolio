var themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

var inputTel = document.getElementById("telefone");

inputTel.addEventListener("input", function (e) {
  var value = e.target.value.replace(/\D/g, "");
  if (value.length > 11) value = value.slice(0, 11);

  if (value.length > 6) {
    e.target.value = "(" + value.slice(0, 2) + ") " + value.slice(2, 7) + "-" + value.slice(7);
  } else if (value.length > 2) {
    e.target.value = "(" + value.slice(0, 2) + ") " + value.slice(2);
  } else if (value.length > 0) {
    e.target.value = "(" + value;
  } else {
    e.target.value = "";
  }
});

var contactForm = document.getElementById("contact-form");
var modal = document.getElementById("custom-modal");
var closeModalBtn = document.querySelector(".close-modal");
var modalOkBtn = document.getElementById("modal-ok-btn");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  modal.style.display = "flex";
  contactForm.reset();
});

closeModalBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

modalOkBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

var navLinks = document.querySelectorAll(".links-menu a");
var sections = document.querySelectorAll(".secao");

window.addEventListener("scroll", function () {
  var current = "";
  
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 110) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("ativo");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("ativo");
    }
  });
});