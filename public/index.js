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
        xPercent: -190,
        ease: "none",
        scrollTrigger: {
            start: "top",
            end: "center",
            scrub: 1,
        }
    }),
    gsap.to('.hscrollPict', {
        xPercent: 150,
        ease: "none",
        scrollTrigger: {
            start: "top",
            end: "center",
            scrub: 1,
        }
    }),
    gsap.from('.background_animation', {
        transform: "translate(-50%, -50%)",
        scale: 0,
        scrollTrigger: {
            start: "top",
            end: "center",
            scrub: 1,
        }
    }),
    gsap.to('.background_animation', {
        borderRadius: "0%",
        scrollTrigger: {
            start: "top",
            end: "center",
            scrub: 1,
        }
    }),
);