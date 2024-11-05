// Esse código JavaScript utiliza querySelectorAll para selecionar todos os elementos com a classe 
// .card e adiciona um evento de click em cada um deles. Esse evento controla o "estado" de cada 
// cartão, alternando entre o estado "virado" (flipped) e o estado padrão, manipulando também a 
// visibilidade do cabeçalho do cartão (card__content-header).


// Seleciona todos os elementos com a classe '.card' e aplica a função a seguir para cada um
document.querySelectorAll('.card').forEach(card => {
    // Adiciona um ouvinte de evento 'click' para cada cartão
    card.addEventListener('click', () => {
        // Passo 1: Fecha todos os cartões abertos, exceto o cartão clicado
        document.querySelectorAll('.card.flipped').forEach(flippedCard => {
            // Se o cartão já virado não for o cartão clicado
            if (flippedCard !== card) {
                // Remove a classe 'flipped' para retornar ao estado original
                flippedCard.classList.remove('flipped');
                // Mostra o cabeçalho do conteúdo (card__content-header)
                flippedCard.querySelector('.card__content-header').classList.remove('hidden');
            }
        });

        // Passo 2: Alterna o estado do cartão clicado
        // Se o cartão já estiver com a classe 'flipped', ele será desvirado, e vice-versa
        card.classList.toggle('flipped');

        // Passo 3: Controla a visibilidade do cabeçalho com base no estado do cartão
        const articleContent = card.querySelector('.card__content-header');
        
        if (card.classList.contains('flipped')) {
            // Se o cartão está no estado 'flipped' (virado), esconde o cabeçalho
            articleContent.classList.add('hidden');
        } else {
            // Caso contrário, exibe o cabeçalho
            articleContent.classList.remove('hidden');
        }
    });
});
