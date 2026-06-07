//a ideia é fazer com que os links apareçam com o gsap assim que entrar na página
window.addEventListener('load', () => {
    const links = document.querySelectorAll('.r_link');

    if(links.length > 0) {
        gsap.to(links, {
            opacity:1,
            duration: 0.6,
            ease:"power1.out",
            stagger: 0.2,
        });
    };
});