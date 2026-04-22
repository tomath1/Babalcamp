const images = [
  "1.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg"
];

let currentIndex = 0;
let autoSlide;
let touchStartX = 0;
let touchEndX = 0;

function showImages() {
  const img1 = document.getElementById("img1");
  const img2 = document.getElementById("img2");
  const img3 = document.getElementById("img3");

  if (img1) img1.src = images[currentIndex % images.length];
  if (img2) img2.src = images[(currentIndex + 1) % images.length];
  if (img3) img3.src = images[(currentIndex + 2) % images.length];
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImages();
}

function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  showImages();
}

/* Auto slide */
function startSlide() {
  autoSlide = setInterval(nextImage, 4000);
}

function stopSlide() {
  clearInterval(autoSlide);
}

showImages();
startSlide();

/* Stop on hover over arrows */
document.querySelectorAll(".arrow").forEach(arrow => {
  arrow.addEventListener("mouseenter", stopSlide);
  arrow.addEventListener("mouseleave", startSlide);
  arrow.addEventListener("touchstart", stopSlide);
  arrow.addEventListener("touchend", startSlide);
});

/* Touch swipe support for mobile */
const gallery = document.querySelector(".gallery");
if (gallery) {
  gallery.addEventListener("touchstart", function(e) {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  gallery.addEventListener("touchend", function(e) {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });
}

function handleSwipe() {
  const swipeThreshold = 50;
  if (touchEndX < touchStartX - swipeThreshold) {
    nextImage();
  }
  if (touchEndX > touchStartX + swipeThreshold) {
    prevImage();
  }
}

/* Scroll reveal animation */
window.addEventListener("scroll", function() {
  let elements = document.querySelectorAll(".reveal");
  elements.forEach(function(el) {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let visible = 100;
    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    }
  });
});

/* Trigger reveal on load */
window.addEventListener("load", function() {
  let elements = document.querySelectorAll(".reveal");
  elements.forEach(function(el) {
    let windowHeight = window.innerHeight;
    let elementTop = el.getBoundingClientRect().top;
    let visible = 100;
    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    }
  });
});

/* Smooth scroll for nav links */
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
