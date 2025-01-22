// scripts.js
document.querySelectorAll('.product-image-wrapper').forEach(wrapper => {
  const image = wrapper.querySelector('.product-image');

  // Zoom-in animation on hover
  wrapper.addEventListener('mouseenter', () => {
    gsap.to(image, {
      scale: 1.2, // Zoom to 1.2x
      duration: 0.5, // Animation duration
      ease: "power3.out", // Smooth easing
    });
  });

  // Reset animation on mouse leave
  wrapper.addEventListener('mouseleave', () => {
    gsap.to(image, {
      scale: 1, // Reset to original size
      duration: 0.5,
      ease: "power3.out",
    });
  });
});
