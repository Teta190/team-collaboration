let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "flex";
}

function enlargeImage(img) {
  if (img.style.transform === "scale(2)") {
    img.style.transform = "scale(1)";
    img.style.zIndex = "1";
    img.style.position = "static";
  } else {
    img.style.transform = "scale(2)";
    img.style.zIndex = "10";
    img.style.position = "relative";
  }
}
