const slides = document.querySelectorAll(".slide_page");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentSlide = 0;
showSlide(currentSlide);

function showSlide(n) {
  slides.forEach(slide => slide.style.display = "none");
  slides[n].style.display = "grid";
}

nextBtn.addEventListener("click", nextSlide);

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

prevBtn.addEventListener("click", prevSlide);

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}