/**FUNCION PARA BUSCAR PELICULA */
function buscarPelicula(Title){
    const apiKey = 'd0e1b949';
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${Title}`;

    fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        if(data){
            mostrarResultados(data.Search);
        }
        console.log(data);
    })
    .catch((error) =>{
        console.error(error);
    })
}

/**FUNCION PARA MOSTRAR LOS RESULTADOS DE LA BUSQUEDA */
function mostrarResultados(peliculas){
    const contenedorResultados = document.getElementById("resultados");
    contenedorResultados.innerHTML = "";

    peliculas.forEach(pelicula => {
        const elemento = document.createElement('div');
        elemento.innerHTML = `<img src='${pelicula.Poster}' style='width: 200px; 
                                                            height: 300px;
                                                            margin-top: 20px'>`;
        contenedorResultados.appendChild(elemento);
    });
}

/**ACTION LISTENER PARA BUSCAR */
const busqueda = document.getElementById("buscar");

busqueda.addEventListener( 'click' , () =>{
    const titulo = document.getElementById('buscador_peliculas');
    if(titulo){
        buscarPelicula(titulo.value);
        titulo.value = "";
    }
    else{
        console.log('No hay texto en el buscador');
    }
})