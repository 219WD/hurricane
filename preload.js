document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 768;

    gsap.timeline()
        .fromTo("#logoPath", { fill: "transparent" }, {
            fill: "#fff", 
            duration: 3,
            ease: "power2.inOut"
        })
        .to(".logo-preloader", {
            scale: isMobile ? 0.5 : 0.2,
            duration: 1,
            ease: "power2.inOut"
        })
        .to(".logo-preloader", {
            x: isMobile ? -100 : -700,
            ease: "power4.inOut",
            duration: 1.5
        })
        .to(".logo-preloader", {
            y: isMobile ? -400 : -300,
            ease: "power4.inOut",
            duration: 1
        })
        .to(".logo-preloader", {
            clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)", 
            duration: 1,
            ease: "power3.inOut",
        })
        .to(".container-preloader", {
            y: -1000,
            ease: "power4.inOut",
            duration: 1
        })
});