import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const listaTareas = () => {
    return (
        <div>
            <ListGroup>
                <ItemTarea></ItemTarea>
            </ListGroup>
        </div>
    );
};

export default listaTareas;