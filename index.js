// /**
//  * CARD DE IMAGENES
//  */
// function mostrarImagenes() {
//     const contenedorcards = document.getElementById("card");

//     fetch("peliculas.json")
//     .then((response) => response.json())  // Asegúrate de retornar response.json()
//     .then((data) => {
//         data.forEach(pelicula => {
//             const cards = document.createElement("div");
//             cards.className = "card";

//             // Se puede crear una estructura más completa para cada card
//             cards.innerHTML =  `<img src="${pelicula.imagen}" alt="${pelicula.titulo}">`;
//             contenedorcards.appendChild(cards);  // Debes pasar la variable `cards`, no un string

//             cards.addEventListener('mouseenter' , () =>{
//                 cards.style.opacity = 0.5;
//                 mostrarDetalle();
//             })
//         });
//     })
//     .catch((error) => {
//         console.error(error);
//     });
// }

// mostrarImagenes();

// function mostrarDetalle(){
//     const detalle = document.createElement("div");
//     fetch('peliculas.json')
//     .then((response) =>{
//         return response.json();
//     })

//     .then((data) =>{
//         data.forEach(pelicula =>{
//             const cards = document.createElement("div");
//             cards.className = "card";
//             cards.innerHTML = `<h4>${pelicula.titulo}</h4>
//                                 <p>${pelicula.descripcion}</p>`
//                                 detalle.appendChild(cards);
//         })
//     })
//     .catch((error) =>{
//         console.error(error);
//     })

//     detalle.addEventListener('click' , () =>{
//         mostrarDetalle();
//     })
// }

/**
 * CARD DE IMAGENES
 */
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
                                    <p> Titulo: ${pelicula.titulo}<br>
                                        Duracion: ${pelicula.duracion} min
                                        <img  src="https://cdn-icons-png.flaticon.com/512/4028/4028586.png">
                                    </p>
                                `;
            // detalles.style.display = "none";  // Iniciar con los detalles ocultos

            // Añadir la imagen y los detalles a la card
            cards.appendChild(img);
            cards.appendChild(detalles);

            // Agregar la card al contenedor principal
            contenedorcards.appendChild(cards);
            

            // // Mostrar los detalles al pasar el ratón por encima de la card
            // cards.addEventListener('mouseenter', () => {
            //     detalles.style.display = "block";
            //     // Mostrar los detalles de esa card
            //     cards.style.opacity = 0.8;  // Efecto visual para la card
            // });

            // // Ocultar los detalles cuando el ratón sale de la card
            // cards.addEventListener('mouseleave', () => {
            //     detalles.style.display = "none";  // Ocultar los detalles de esa card
            //     cards.style.opacity = 1;  // Restaurar la opacidad de la card
            // });
        });
    })
    .catch((error) => {
        console.error(error);
    });
}

mostrarImagenes();
