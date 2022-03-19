//Importamos el router que es la función para determinar la ruta y visualización de la página
import router from './routes';

//Añadimos un EventListener para detectar cuando el Window detecta la carga de información de la página
window.addEventListener('load', router);

//EventListener que escucha cuando se realiza un cambio en la dirección del sitio
window.addEventListener('hashchange', router);