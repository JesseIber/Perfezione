// master GSAP and ScrollTrigger
// https://www.creativeCodingClub.com
// Unlock over 200 video lessons


const races = document.querySelector(".pictures");
console.log(races.offsetWidth)

function getScrollAmount() {
    let racesWidth = races.scrollWidth;
    return -(racesWidth - window.innerWidth);
}

const tween = gsap.to(races, {
    x: getScrollAmount,
    duration: 3,
    ease: "none",
});


ScrollTrigger.create({
    trigger: ".picture_wrapper",
    end: () => `+=${getScrollAmount() * -1}`,
    pin: true,
    animation: tween,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: true
})

