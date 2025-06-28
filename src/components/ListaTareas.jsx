import { ListGroup } from "react-bootstrap";
import ItemTarea from "./itemTarea";

const listaTareas = () => {
    return (
        <div>
            <ListGroup className="mt-3">
                <ItemTarea></ItemTarea>
            </ListGroup>
        </div>
    );
};

export default listaTareas;