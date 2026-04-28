//pra que a gente possa modificar arquivos do html, precisamos
//referenciar aqui no js

const botao = document.querySelector('#btn_start');
const camada = document.querySelector('#camada_transicao');
const video = document.querySelector('#video_transicao');

//depois de referenciar, adicionamos as ações
//esse "e" é um objeto que vai guardar as informações do click
botao.addEventListener('click', (e) => {
    e.preventDefault(); //impede a mudança de página (ou seja, previne do comportamento padrão)
    const destino = e.currentTarget.href; //guarda a informação de link que eu quero ir

    camada.style.display = 'block';
    //aqui a gente troca o display da camada de none pra block

    gsap.to(camada, {
        opacity: 1,
        duration: 0.5,
        onStart: () => video.play()
    });
    //aqui utilizamos o gsap para controlar a ativação do video trazendo a camada para frente da tela
    //tenho que estudar mais sobre isso e como funciona, nesse momento eu to me orientando pela troca de ideia com a ideia com a IA

    video.onended = () => {
        window.location.href = destino;
    }
    //quando o video acabar, quero acessar a url armazenada la no inicio
});