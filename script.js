// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', function () {

    // Seleciona os elementos do DOM
    const greetButton = document.getElementById('greet-btn');
    const profileName = document.getElementById('profile-name');

    // Array com diferentes nomes para demonstrar interatividade
    const names = ['João Silva', 'Maria Santos', 'Pedro Oliveira', 'Ana Costa'];
    let nameIndex = 0;

    // Função para criar mensagem personalizada
    function createGreetingMessage(name) {
        const hour = new Date().getHours();
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = 'Bom dia';
        } else if (hour >= 12 && hour < 18) {
            greeting = 'Boa tarde';
        } else {
            greeting = 'Boa noite';
        }

        return `${greeting}, ${name}! Como você está?`;
    }

    // Função para exibir mensagem
    function showGreeting() {
        const currentName = profileName.textContent;
        const message = createGreetingMessage(currentName);

        // Criar elemento de notificação
        const notification = document.createElement('div');
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 15px 30px;
            border-radius: 50px;
            font-size: 16px;
            font-weight: 600;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            animation: slideDown 0.3s ease;
        `;

        // Adicionar animação via JavaScript
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideDown {
                from {
                    top: -100px;
                    opacity: 0;
                }
                to {
                    top: 20px;
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(notification);

        // Remover notificação após 3 segundos
        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease reverse';
            setTimeout(() => {
                document.body.removeChild(notification);
                document.head.removeChild(style);
            }, 300);
        }, 3000);

        // Efeito bônus: mudar o nome do perfil (opcional)
        nameIndex = (nameIndex + 1) % names.length;
        profileName.textContent = names[nameIndex];
    }

    // Adiciona evento de clique ao botão
    greetButton.addEventListener('click', showGreeting);

    // Efeito adicional: mensagem de boas-vindas quando a página carrega
    setTimeout(() => {
        showGreeting();
    }, 500);

    // Log para confirmar que o script está funcionando
    console.log('Cartão de perfil carregado com sucesso!');

    // Opcional: mudar imagem ao clicar (demonstração adicional)
    const profileImg = document.getElementById('profile-img');
    profileImg.addEventListener('click', function () {
        const images = [
            'https://via.placeholder.com/150/667eea/ffffff?text=JS',
            'https://via.placeholder.com/150/764ba2/ffffff?text=CSS',
            'https://via.placeholder.com/150/667eea/ffffff?text=HTML'
        ];
        const randomImage = images[Math.floor(Math.random() * images.length)];
        this.src = randomImage;
    });
});
