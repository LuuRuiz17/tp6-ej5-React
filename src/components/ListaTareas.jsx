import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const listaTareas = ({tareas}) => {
    return (
        <div>
            <ListGroup className="mt-3">
                {
                    tareas.map((tarea, indice) => <ItemTarea key={indice} nombreTarea = {tarea}></ItemTarea>)
                }
            </ListGroup>
        </div>
    );
};

export default listaTareas;