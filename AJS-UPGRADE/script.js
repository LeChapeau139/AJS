document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
});

function scrollCarousel(direction) {
  const track = document.getElementById("carousel-track");
  const cardWidth = track.querySelector(".car-card").offsetWidth;
  const visibleWidth = track.clientWidth;
  const scrollMax = track.scrollWidth - visibleWidth;

  // Si on est à la fin et on veut aller encore à droite → retour au début
  if (direction > 0 && Math.ceil(track.scrollLeft) >= scrollMax) {
    track.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    track.scrollBy({ left: direction * (cardWidth + 32), behavior: "smooth" });
  }
}

// Défilement automatique toutes les 3 secondes
setInterval(() => {
  scrollCarousel(1);
}, 3000);
