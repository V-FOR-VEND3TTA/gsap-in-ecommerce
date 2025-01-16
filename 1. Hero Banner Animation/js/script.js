 // GSAP animation
    window.addEventListener('load', () => {
      const tl = gsap.timeline();

      tl.to('.headline', {
        duration: 1,
        opacity: 1,
        y: -20,
        ease: 'power2.out'
      })
      .to('.cta', {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power2.out'
      }, "-=0.5")
      .to('.product-image', {
        duration: 1.5,
        opacity: 1,
        bottom: "10%",
        ease: 'bounce.out'
      });
    });