//Importamos la función para obtener datos de la API, para poder generar el listado completo de personajes
import getData from '../utils/getData';

const Home = async () => {
    const characters = await getData();
    /*
        Ejecutamos una función map para generar cada elemento de visualización en la página
        También se crea el enlace para vista de los datos del personaje  
    */
   const view = `
    <div class="Characters">
        ${characters.results.map(character => `
            <article class="Character-item">
                <a href='#/${character.id}/'> 
                    <img src="${character.image}" alt="${character.name}"/>
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')};
    </div>
    `;
    return view;
}

export default Home;