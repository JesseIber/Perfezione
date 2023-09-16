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