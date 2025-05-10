
const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

nextBtn.addEventListener('click', () => {
carousel.scrollBy({ left: 320, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
carousel.scrollBy({ left: -320, behavior: 'smooth' });
});

