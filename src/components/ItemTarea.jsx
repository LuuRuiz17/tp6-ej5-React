import { ListGroup, Button} from "react-bootstrap";

const itemTarea = ({nombreTarea, borrarTarea}) => {
    return (
        <ListGroup.Item className="d-flex justify-content-between bg-light">
            {nombreTarea}<Button variant="danger" onClick={()=> borrarTarea(nombreTarea)}>✖️</Button>
        </ListGroup.Item>
    );
};

export default itemTarea;