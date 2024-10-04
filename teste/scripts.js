document.addEventListener("DOMContentLoaded", function() {
    // Exemplo de uma simples interação de botão de rolar para a seção de serviços
    document.querySelector('.banner .btn').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('#servicos').scrollIntoView({ behavior: 'smooth' });
    });
});
