//Se importan getHash y getData para poder obtener la información del personaje
import getHash from "../utils/getHash";
import getData from "../utils/getData";


const Character = async () => {
    //Obtenemos el hash del elemento actual
    const id = getHash();
    //Realizamos la solicitud a la API para pedir los datos del personaje
    const character = await getData(id);
    //Generamos el elementos vista para desplegar la información del personaje
    const view = `
        <div class="Characters-inner">
        <img src="${character.image}" alt="${character.name}">
            <article class="Characters-card">
                <h2>${character.name}</h2>
                <article class="Characters-card">
                    <h3>Episodes: <span>${character.episode.length}</span></h3> 
                    <h3>Status: <span>${character.status}</span></h3>
                    <h3>Species: <span>${character.species}</span></h3>
                    <h3>Gender: <span>${character.gender}</span></h3>
                    <h3>Origin: <span>${character.origin.name}</span></h3>
                    <h3>Last Location: <span>${character.location.name}</span></h3>
                </article>
            </article>
        </div>    
    `;
    return view;
};

export default Character;