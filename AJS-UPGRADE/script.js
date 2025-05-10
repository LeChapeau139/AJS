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

// Localisation 

function showLocation(index) {
  const tabs = document.querySelectorAll(".location-tab");
  const maps = document.querySelectorAll(".map-frame");

  tabs.forEach((tab, i) => {
    tab.classList.toggle("active", i === index);
    maps[i].classList.toggle("active", i === index);
  });
}

// -----------------------------
// -----------------------------
// -----------------------------

document.querySelector(".search-btn").addEventListener("click", () => {
  const startDate = document.querySelector("input[type='date']:nth-of-type(1)").value;
  const endDate = document.querySelector("input[type='date']:nth-of-type(2)").value;

  if (!startDate || !endDate) {
    alert("Veuillez sélectionner une date de départ et de retour.");
    return;
  }

  // Exemples de véhicules (en vrai, tu peux les récupérer depuis un serveur ou base de données)
  const vehicles = [
    {
      name: "Peugeot 208",
      image: "assets/cars/peugeot208.png",
      seats: 5,
      gearbox: "Manuelle",
      fuel: "Essence",
      price: 19,
      features: ["A/C", "ABS", "Air Bags", "GPS", "Bluetooth"]
    },
    {
      name: "Renault Captur",
      image: "assets/cars/capture2.png",
      seats: 5,
      gearbox: "Automatique",
      fuel: "Diesel",
      price: 26,
      features: ["A/C", "ABS", "Air Bags", "GPS", "Bluetooth"]
    },
    {
      name: "Dacia Lodgy (7 places)",
      image: "assets/cars/dacia-lodgy-5.png",
      seats: 7,
      gearbox: "Manuelle",
      fuel: "Diesel",
      price: 35,
      features: ["A/C", "ABS", "Air Bags", "GPS", "Bluetooth"]
    }
  ];

  const list = document.getElementById("vehicle-list");
  list.innerHTML = ""; // vider les anciens résultats

  vehicles.forEach((v) => {
    const card = document.createElement("div");
    card.className = "vehicle-card";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}" />
      <h3>${v.name}</h3>
      <p><strong>${v.seats}</strong> places</p>
      <p>Boîte : ${v.gearbox}</p>
      <p>Carburant : ${v.fuel}</p>
      <p><strong>À partir de ${v.price} € / jour</strong></p>
      <ul class="vehicle-features">
        ${v.features.map(f => `<li>✔ ${f}</li>`).join("")}
      </ul>
    `;
    list.appendChild(card);
  });

  document.getElementById("vehicle-results").classList.remove("hidden");
});
