// Configuration
const totalFrames = 6; // Total number of images
const imagePath = "img/frame-"; // Base path for the images
const imageExtension = ".png"; // Extension for the images

// Selectors
const viewer = document.querySelector(".product-viewer");

// State
let currentFrame = 1;
let isDragging = false;
let startX = 0;

// Preload images
const frames = [];
for (let i = 1; i <= totalFrames; i++) {
  const img = new Image();
  img.src = `${imagePath}${i}${imageExtension}`;
  img.classList.add("viewer-image");
  viewer.appendChild(img);
  frames.push(img);
}

// Set the initial frame to visible
frames[currentFrame].style.display = "block";

// Update the visible frame
function updateFrame(index) {
  frames[currentFrame].style.display = "none"; // Hide the current frame
  currentFrame = (index + totalFrames) % totalFrames; // Wrap around
  frames[currentFrame].style.display = "block"; // Show the new frame
}

// Drag to rotate
viewer.addEventListener("mousedown", (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  const dx = e.clientX - startX;
  if (Math.abs(dx) > 5) {
    const direction = dx > 0 ? -1 : 1;
    updateFrame(currentFrame + direction);
    startX = e.clientX;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});

// Scroll to rotate
viewer.addEventListener("wheel", (e) => {
  const direction = e.deltaY > 0 ? 1 : -1;
  updateFrame(currentFrame + direction);
});

// Touch events for mobile
viewer.addEventListener("touchstart", (e) => {
  isDragging = true;
  startX = e.touches[0].clientX;
});

viewer.addEventListener("touchmove", (e) => {
  if (!isDragging) return;
  const dx = e.touches[0].clientX - startX;
  if (Math.abs(dx) > 5) {
    const direction = dx > 0 ? -1 : 1;
    updateFrame(currentFrame + direction);
    startX = e.touches[0].clientX;
  }
});

viewer.addEventListener("touchend", () => {
  isDragging = false;
});

// GSAP animation (optional smooth rotation)
function rotateSmoothly(delta) {
  gsap.to({}, {
    duration: 0.5,
    onUpdate: () => updateFrame(currentFrame + delta),
    ease: "power1.out"
  });
}

// Example: Smooth rotation on click (optional)
// viewer.addEventListener("dblclick", () => rotateSmoothly(10));
