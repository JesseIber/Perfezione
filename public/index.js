gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".snappoint");

function goToSection(i) {
    gsap.to(window, {
        scrollTo: { y: i * innerHeight, autoKill: false, ease: "Power3.easeInOut" },
        duration: 0.3
    });
}

window.scroll(
    gsap.to('.hscrollLogo', {
        xPercent: -150,
        ease: "none",
        scrollTrigger: {
            trigger: ".hscrollLogo",
            start: "center",
            scrub: 1
        }
    }),
    gsap.to('.hscrollPict', {
        xPercent: 100,
        ease: "none",
        scrollTrigger: {
            trigger: ".hscrollPict",
            start: "center",
            scrub: 1,
        }
    }),


    gsap.from('.growUpText', {
        ease: "none",
        opacity: 0,
        scale: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".hscrollPict",
            start: "right center",
        }
    }),

    gsap.to('.growUpText', {
        ease: "none",
        scale: 3,
        scrollTrigger: {
            trigger: ".hscrollPict",
            start: "right center",
            scrub: 1,
        }
    }),

    gsap.from('.growUpText', {
        ease: "none",
        scale: 3,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".hscrollPict",
            start: "right center",
        }
    }),
    gsap.to('.growUpText', {
        ease: "none",
        scale: 0,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".test",
            start: "center",
        }
    }),
);
