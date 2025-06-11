import { Form, Button } from 'react-bootstrap';
import ListaTareas from './listaTareas';

const formularioTareas = () => {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Ingresa una tarea" />
                    <Button variant='info ms-3'>➕</Button>
                </Form.Group>
            </Form>
            <ListaTareas></ListaTareas>
        </div>
    );
};

export default formularioTareas;