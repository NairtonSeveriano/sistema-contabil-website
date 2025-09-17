document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0;

    // Função para mostrar o slide atual e esconder os outros
    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.style.display = 'none'; // Esconde todos os slides
            if (index === currentIndex) {
                slide.style.display = 'block'; // Mostra apenas o slide atual
            }
        });
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Animação automática a cada 5 segundos
    setInterval(() => {
        currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000);

    // Mostra o primeiro slide ao carregar a página
    updateCarousel();
});