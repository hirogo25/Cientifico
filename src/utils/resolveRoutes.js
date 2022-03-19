//Función que resuelve qué template utilizará basado en la ruta recibida

const resolveRoutes = (route) => {
    if(route.length <= 3) {
        //Condicional que verifica si el valor obtenido es el slash del home o una id
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    //Cuando no es una id o el slash de Home, retorna directamente la ruta del valor recibido
    return `/${route}`;
}

export default resolveRoutes;