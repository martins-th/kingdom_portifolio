window.addEventListener('load', () => {
    gsap.to(".container", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
    })
})

//agora vamos fazer o efeito de pulsar das opções do home


const listaLinks = document.querySelectorAll('.hlink_item')
//o que temos aqui é um array que contem os itens da lista container_lista
//a ideia é passar por cada um, associar o ponto_luz a cada item e ai sim fazer o eventListener para cada item

listaLinks.forEach((item) => {
    const luzIndividual = item.querySelector('.ponto_luz');
    //cada efeito de pulsar está atrelado a uma luz de cada vez
    const pulsoIndividual = gsap.to(luzIndividual, {
    scale: 1,
    opacity: 0.8,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    paused: true,
    ease: "sine.inOut"
    })
    //agora sim precisamos utilizar os eventListener para CADA ITEM


    item.addEventListener('mouseenter', () => {
        gsap.to(luzIndividual, {opacity: 1, duration: 0.3});
        pulsoIndividual.play();
    })

    item.addEventListener('mouseleave', () => {
        gsap.to(luzIndividual, {opacity: 0, duration: 0.3});
        pulsoIndividual.pause();
    })
})