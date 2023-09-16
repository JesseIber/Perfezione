window.scroll(
    gsap.to('.hscrollLogo', {
        xPercent: -100,
        ease: "none",
        scrollTrigger: {
            trigger: ".hscrollLogo",
            start: "right center",
            scrub: 1
        }
    }),
    gsap.to('.hscrollPict', {
        xPercent: 100,
        ease: "none",
        scrollTrigger: {
            trigger: ".hscrollPict",
            start: "right center",
            scrub: 1,
        }
    })
);