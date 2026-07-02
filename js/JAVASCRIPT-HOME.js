// Seleciona o botão e o bloco de texto pelos IDs
const btnConhecer = document.getElementById('btn-conhecer');
const projetoInfo = document.getElementById('projeto-info');

// Adiciona o evento de clique no botão
btnConhecer.addEventListener('click', () => {
    // O "toggle" adiciona a classe se ela não existir, e remove se ela já existir
    projetoInfo.classList.toggle('mostrar');
});