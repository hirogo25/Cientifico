//Obtenemos la clave del elemento que queremos visualizar
const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';

export default getHash;