/**
 * CARD DE IMAGENES
 */
function mostrarImagenes() {
    const contenedorcards = document.getElementById("card");

    fetch("peliculas.json")
    .then((response) => response.json())
    .then((data) => {
        data.forEach(pelicula => {
            const cards = document.createElement("div");
            cards.className = "card tarjeta";
            
            // Crear la imagen y agregarla a la card
            const img = document.createElement("img");
            img.src = pelicula.imagen;
            img.alt = pelicula.titulo;

            // Crear el contenedor de los detalles (título y descripción)
            const detalles = document.createElement("div");
            detalles.className = "detalles";
            detalles.innerHTML = `
                                    <p style = "font-size: 15px";">${pelicula.titulo}<br>
                                                Duracion: ${pelicula.duracion} min<br>
                                                Genero: ${pelicula.genero}
                                    </p>
                                    <p style = "font-size: 12px";
                                                text-align: justify;
                                                "width: 85px">${pelicula.descripcion}
                                    </p>
                                    <p style="width: 100px;
                                            font-size: 25px;">
                                        <i class="bi bi-play-circle-fill icon"></i>
                                        <i class="bi bi-pause-circle-fill icon"></i>
                                        <i class="bi bi-star-fill icon"></i>
                                    </p>
                                `;

            // Añadir la imagen y los detalles a la card
            cards.appendChild(img);
            cards.appendChild(detalles);

            // Agregar la card al contenedor principal
            contenedorcards.appendChild(cards);
        });
    })
    .catch((error) => {
        console.error(error);
    });
}

mostrarImagenes();
