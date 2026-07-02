document.getElementById('form-contato').addEventListener('submit', function(evento) {
    // Impede o formulário de recarregar a página antes de validarmos
    evento.preventDefault();

    // Captura os valores dos campos tirando espaços extras
    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Captura os elementos onde as mensagens de erro serão exibidas
    const erroNome = document.getElementById('erro-nome');
    const erroEmail = document.getElementById('erro-email');
    const erroMensagem = document.getElementById('erro-mensagem');
    const msgSucesso = document.getElementById('mensagem-sucesso');

    // Limpa os erros e esconde o sucesso de envios anteriores
    erroNome.textContent = '';
    erroEmail.textContent = '';
    erroMensagem.textContent = '';
    msgSucesso.className = 'sucesso-oculto';

    let formularioValido = true;

    // 1. Validação do Campo Nome
    if (nome === '') {
        erroNome.textContent = 'O campo Nome é obrigatório.';
        formularioValido = false;
    } else if (nome.length < 3) {
        erroNome.textContent = 'O nome deve ter pelo menos 3 caracteres.';
        formularioValido = false;
    }

    // 2. Validação do Campo E-mail
    if (email === '') {
        erroEmail.textContent = 'O campo E-mail é obrigatório.';
        formularioValido = false;
    } else if (!email.includes('@') || !email.includes('.')) {
        erroEmail.textContent = 'Introduza um e-mail válido (ex: nome@email.com).';
        formularioValido = false;
    }

    // 3. Validação do Campo Mensagem
    if (mensagem === '') {
        erroMensagem.textContent = 'O campo Mensagem é obrigatório.';
        formularioValido = false;
    } else if (mensagem.length < 10) {
        erroMensagem.textContent = 'A mensagem deve ter pelo menos 10 caracteres.';
        formularioValido = false;
    }

    // Se todos os campos passaram no teste, exibe o sucesso!
    if (formularioValido) {
        msgSucesso.className = 'sucesso-visivel';
        
        // Limpa os campos do formulário após o envio correto
        document.getElementById('form-contato').reset();
    }
});