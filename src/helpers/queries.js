const urlTareas = import.meta.env.VITE_API_TAREAS

export const listarTareas = async () => {
    try {
        console.log(urlTareas);
        const respuesta = await fetch(urlTareas);
        return respuesta
    } catch(error){
        console.log(error);
        return null
    }
}