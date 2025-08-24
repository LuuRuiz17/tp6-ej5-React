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

export const crearTarea = async (tareaNueva) => {
    try{
        const respuesta = fetch(urlTareas , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaNueva) //transformo mis datos a formato JSON
        })
        return respuesta
    }catch(error){
        console.error(error);
        return null
    }
}