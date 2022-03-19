//Enlace de la API para solicitar información de los personajes
const API = "https://rickandmortyapi.com/api/character";

//Función para obtener los datos de la API
const getData = async (id) => {
    //Verifica si se recibió un valor en la id; si no recibe valor, regresa la dirección general de la API que devuelve todos los personajes
    const apiURL = id ? `${API}/${id}` : API;
    try{
        //Solicitamos la información a la URL generada
        const response = await fetch(apiURL);
        //Transforma la información recibida en el fetch en un objeto JSON iterable
        const data = await response.json();
        return data;
    } catch(error) {
        //En caso de que no se pueda obtener la información de la API, se envía un warning a la consola
        console.log("Fetch Error", error);
    }
}

export default getData;