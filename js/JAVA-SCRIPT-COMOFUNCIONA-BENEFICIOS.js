// Seleciona todos os botões e descrições da página atual pelas classes genéricas
const botoes = document.querySelectorAll('.btn-cartao');
const descricoes = document.querySelectorAll('.texto-descricao');

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const descricaoAtual = descricoes[indice];

        // Se o cartão clicado já está aberto, apenas fecha ele
        if (descricaoAtual.classList.contains('mostrar')) {
            descricaoAtual.classList.remove('mostrar');
        } else {
            // Fecha todos os cartões da página para abrir apenas o novo
            descricoes.forEach(desc => desc.classList.remove('mostrar'));
            // Abre o cartão correspondente ao botão clicado
            descricaoAtual.classList.add('mostrar');
        }
    });
});