window.addEventListener('load', () => {
    gsap.to(".container", {
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        delay: 0.5
    })
})

//agora vamos fazer o efeito de pulsar das opções do home
//primeiro referenciando o link (toda área clicável da opção)

const link = document.querySelector('.hlink_item');
const botaoH = document.querySelector('.btn_home');
const luz = document.querySelector('.lista_item:hover::before');
//coloquei a do botão pois vai ter o mesmo efeito também, mas em uma tag diferente
//agora sim podemos colocar os efeitos 
//criando o efeito de pulsar e armazenando em uma variável para poder usar depois
const pulso = gsap.to(luz, {
    scale: 2,
    opacity: 0.8,
    duration: 0.6,
    repeat: -1,
    yoyo: true,
    paused: true,
    ease: "sine.inOut"
})



link.addEventListener('mouseenter', () => {
    gsap.to(luz, {opacity: 1, duration: 0.3});
    pulso.play();
})

link.addEventListener('mouseleave', () => {
    gsap.to(luz, {opacityy: 0, duration: 0.3});
    pulso.pause();
})