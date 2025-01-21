let currentIndex = 0;
const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Ensure all items have the same width dynamically
function updateCarouselWidth() {
  const itemWidth = carousel.clientWidth;
  items.forEach(item => {
    item.style.minWidth = `${itemWidth}px`;
  });
}

// Update carousel position
function updateCarouselPosition() {
  const itemWidth = items[0].clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

// Move to previous slide
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? items.length - 1 : currentIndex - 1;
  updateCarouselPosition();
});

// Move to next slide
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarouselPosition();
});

// Adjust carousel on window resize
window.addEventListener("resize", () => {
  updateCarouselWidth();
  updateCarouselPosition();
});

// Initial setup
updateCarouselWidth();
updateCarouselPosition();
