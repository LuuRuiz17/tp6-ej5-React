const urlTareas = import.meta.env.VITE_API_TAREAS

export const listarTareas = async () => {
    try {
        const respuesta = await fetch(urlTareas);
        return respuesta
    } catch (error) {
        console.log(error);
        return null
    }
}

export const crearTarea = async (tareaNueva) => {
    try {
        const respuesta = fetch(urlTareas, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaNueva) //transformo mis datos a formato JSON
        })
        return respuesta
    } catch (error) {
        console.error(error);
        return null
    }
}

export const borrarTarea = async (id) => {
    try {
        const url = `${urlTareas}/${id}`;
        const respuesta = await fetch(url, {
            method: "DELETE",
        });
        return respuesta
    } catch (error) {
        console.error(error);
        return null
    }
}

export const obtenerTarea = async (id) => {
    try {   
        const url = `${urlTareas}/${id}`;
        const respuesta = await fetch(url);
        return respuesta
    } catch (error) {
        console.error(error);
        return null
    }   
}

export const editarTarea = async (id, tareaEditada) => {
    try {
        const url = `${urlTareas}/${id}`;
        const respuesta = await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tareaEditada)
        });
        const data = await respuesta.json();
        return { status: respuesta.status, data };
    } catch (error) {
        console.error(error);
        return { status: 500, data: null };
    }
}