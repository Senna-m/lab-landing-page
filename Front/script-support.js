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
            const tipo = document.getElementById('tipo').value.trim(); // campo novo
            const mensagem = document.getElementById('mensagem').value.trim();

            // Validação básica — agora inclui o campo tipo
            if (!nome || !email || !tipo || !mensagem) {
                alert('Por favor, preencha todos os campos!');
                return;
            }

            // Mostrar carregamento
            const botao = form.querySelector('button[type="submit"]');
            const textoBotaoOriginal = botao.textContent;
            botao.textContent = 'Enviando...';
            botao.disabled = true;

            try {
                // Envia para a rota de atendimento
                const resposta = await fetch('http://localhost:5000/api/atendimento', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nome: nome,
                        email: email,
                        tipo: tipo,       // campo novo
                        mensagem: mensagem
                    })
                });

                const dados = await resposta.json();

                if (resposta.ok) {
                    alert('Atendimento enviado com sucesso! Em breve entraremos em contato.');
                    form.reset();
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

// Navegação para home
function goToHome() {
    window.location.href = '/';
}

function navigateToHome(url = '/index.html') {
    window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
    const homeLinks = document.querySelectorAll('a[href="#home"]');
    homeLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            goToHome();
        });
    });
});
