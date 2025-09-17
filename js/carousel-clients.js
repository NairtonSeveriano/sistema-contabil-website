document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container-clients');
    const slides = document.querySelectorAll('.carousel-slide-clients');
    const prevButton = document.querySelector('.carousel-prev-clients');
    const nextButton = document.querySelector('.carousel-next-clients');

    let currentIndex = 0;
    const slidesPerPage = 3; // Quantidade de slides visíveis

    function updateCarousel() {
        const slideWidth = slides[0].clientWidth + 20; // Largura do slide + o espaçamento
        carousel.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : 0;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < slides.length - slidesPerPage) ? currentIndex + 1 : slides.length - slidesPerPage;
        updateCarousel();
    });

    // Inicia o carrossel ao carregar a página
    updateCarousel();
});