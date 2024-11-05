document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        // Fecha todos os cartões abertos, exceto o cartão clicado
        document.querySelectorAll('.card.flipped').forEach(flippedCard => {
            if (flippedCard !== card) {
                flippedCard.classList.remove('flipped');
                flippedCard.querySelector('.card__content-header').classList.remove('hidden');
            }
        });
        
        // Alterna o estado do cartão clicado
        card.classList.toggle('flipped');
        
        const articleContent = card.querySelector('.card__content-header');
        if (card.classList.contains('flipped')) {
            articleContent.classList.add('hidden'); // Esconde o título
        } else {
            articleContent.classList.remove('hidden'); // Mostra o título
        }
    });
});
