import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const listaTareas = ({tareas, borrarTarea}) => {
    return (
        <div>
            <ListGroup className="mt-3">
                {
                    tareas.map((tarea, indice) => <ItemTarea key={indice} nombreTarea = {tarea} borrarTarea = {borrarTarea}></ItemTarea>)
                }
            </ListGroup>
        </div>
    );
};

export default listaTareas;