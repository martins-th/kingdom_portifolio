//pra essa tela, teremos inicialmente as referências utilizadas no DOM
//pela lógica, vou alternar telas usando botões, então tenho que manipular esses caras
const botaoSobre = document.querySelectorAll('.s_btn');
const telas = document.querySelectorAll('.tela');

//agora essa variável é por conta de eu voltar pra tela inicial após clicar fora dos botões. (principalmente por não terem botões variáveis)
const telaInicial = document.getElementById('s_tela_inicial');

function trocaTelas (idDaTelaEscolhida) {
    const telaAtual = document.querySelector('.tela.ativa');
    const proximaTela = document.getElementById(idDaTelaEscolhida);

    if (telaAtual === proximaTela) return;

    gsap.to(telaAtual, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            telaAtual.classList.remove('ativa');
            proximaTela.classList.add('ativa');

            gsap.set(proximaTela, {opacity: 0});

            gsap.to(proximaTela, {
                opacity: 1,
                duration:0.2,
                ease: "power1.out",
            });
        }
    });
}

botaoSobre.forEach(botoes  => {
    botoes.addEventListener('click', (event) => {
        event.stopPropagation();
        const alvo = botoes.getAttributte('data-target');
    trocaTelas(alvo);
    });
});

document.addEventListener('click', () => {
    trocaTelas('s_tela_inicial');
})