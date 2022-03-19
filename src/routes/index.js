/*
    En este archivo, importamos todos los modulos, templates que vayamos creando
    No necesitamos agregar la extensión al final del archivo
*/
import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import Ejemplo from '../pages/Ejemplo';

import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';


//Objeto que contiene las rutas que serán generadas en el proyecto
const routes = {
    '/': Home,
    '/:id': Character,
    '/ejemplo': Ejemplo,
    '/contact': 'Contact',
}

//Muestra los elementos de acuerdo a la lógica establecida en el código
const router = async () => {
    //Asignamos a constantes los elementos del DOM de la página principal
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    

    //Asignamos contenido a la constante content con la función Header()
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();

};

export default router;