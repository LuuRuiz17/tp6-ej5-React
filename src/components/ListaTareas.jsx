import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";
import { listarTareas } from "../helpers/queries.js";
import { useEffect, useState } from "react";

const ListaTareas = () => {
  const [listaDeTareas, setListaDeTareas] = useState([]);

  useEffect(() => {
    obtenerTareas();
  }, []);

  const obtenerTareas = async () => {
    const respuesta = await listarTareas();
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setListaDeTareas(datos);
    } else {
      console.log("Error al lista las tareas");
    }
  };

  return (
    <div>
      <ListGroup className="mt-3">
        {
          // Tengo que hacer un bucle para hacer cada ítem del array de tareas.
          // tareas.map recorre todo el array y, por cada elemento del array, dibujo un ItemTarea
          listaDeTareas.map((tarea) => (
            <ItemTarea
              key={tarea._id}
              nombreTarea={tarea.tarea}
              id={tarea._id}
            ></ItemTarea>
          ))
        }
      </ListGroup>
    </div>
  );
};

export default ListaTareas;
