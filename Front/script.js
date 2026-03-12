// Abre o modal
function abrirModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'block';
}

// Fecha o modal
function fecharModal() {
    const modal = document.getElementById('modal');
    if (modal) modal.style.display = 'none';
}

// Inicializar modal
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const open = document.getElementById('openModal');
    const close = document.getElementById('closeModal');

    if (open && modal) {
        open.addEventListener('click', () => abrirModal());
    }
    if (close && modal) {
        close.addEventListener('click', () => fecharModal());
    }

    // Fechar ao clicar fora da caixa
    window.addEventListener('click', e => {
        if (e.target === modal) fecharModal();
    });

    // Submeter formulário
    const form = document.querySelector('#modal form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação básica
            if (!nome || !email || !mensagem) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Mostrar carregamento
            const botao = form.querySelector('button[type="submit"]');
            const textoBotaoOriginal = botao.textContent;
            botao.textContent = 'Enviando...';
            botao.disabled = true;

            try {
                // Enviar para o backend
                const resposta = await fetch('http://localhost:5000/api/contato', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome: nome,
                        email: email,
                        mensagem: mensagem
                    })
                });

                const dados = await resposta.json();

                if (resposta.ok) {
                    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
                    form.reset(); // Limpar formulário
                    fecharModal();
                } else {
                    alert(`Erro ao enviar: ${dados.erro}`);
                }
            } catch (erro) {
                console.error('Erro:', erro);
                alert('Erro ao conectar com o servidor. Verifique se o backend está rodando.');
            } finally {
                // Restaurar botão
                botao.textContent = textoBotaoOriginal;
                botao.disabled = false;
            }
        });
    }
});

// Navigate to home page
function goToHome() {
    window.location.href = '/';
}

// Or use this for a specific home page URL
function navigateToHome(url = '/index.html') {
    window.location.href = url;
}

// You can also use this for a link click
document.addEventListener('DOMContentLoaded', function() {
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            goToHome();
        });
    });
});
