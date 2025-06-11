import { ListGroup, Button} from "react-bootstrap";

const itemTarea = () => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            Tarea 1 <Button variant="danger">✖️</Button>
        </ListGroup.Item>
    );
};

export default itemTarea;