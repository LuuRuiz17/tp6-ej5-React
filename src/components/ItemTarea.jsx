import { ListGroup, Button} from "react-bootstrap";

const itemTarea = ({nombreTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between">
            {nombreTarea}<Button variant="danger">✖️</Button>
        </ListGroup.Item>
    );
};

export default itemTarea;