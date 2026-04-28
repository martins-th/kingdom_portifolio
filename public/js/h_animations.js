window.addEventListener('load', () => {
    gsap.to(".container", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
    })
})