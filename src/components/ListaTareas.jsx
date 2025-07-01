import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const listaTareas = ({tareas, borrarTarea}) => {
    return (
        <div>
            <ListGroup className="mt-3">
                {
                    // Tengo que hacer un bucle para hacer cada ítem del array de tareas.
                    // tareas.map recorre todo el array y, por cada elemento del array, dibujo un ItemTarea
                    tareas.map((tarea, indice) => <ItemTarea key={indice} nombreTarea = {tarea} borrarTarea = {borrarTarea}></ItemTarea>)
                }
            </ListGroup>
        </div>
    );
};

export default listaTareas;