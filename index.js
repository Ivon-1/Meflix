/**
 * CARD DE IMAGENES
 */
function mostrarImagenes() {
    const contenedorcards = document.getElementById("card");

    fetch("peliculas.json")
    .then((response) => response.json())  // Asegúrate de retornar response.json()
    .then((data) => {
        data.forEach(pelicula => {
            const cards = document.createElement("div");
            cards.className = "card";
            // Se puede crear una estructura más completa para cada card
            cards.innerHTML =  `<img src="${pelicula.imagen}" alt="${pelicula.titulo}">`;
            contenedorcards.appendChild(cards);  // Debes pasar la variable `cards`, no un string
        });
    })
    .catch((error) => {
        console.error(error);
    });
}

mostrarImagenes();