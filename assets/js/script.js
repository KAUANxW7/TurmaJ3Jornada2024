document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
        
        const articleContent = card.querySelector('.card__article__content');
        if (card.classList.contains('flipped')) {
            articleContent.classList.add('hidden'); // Esconde o título
        } else {
            articleContent.classList.remove('hidden'); // Mostra o título
        }
    });
});
