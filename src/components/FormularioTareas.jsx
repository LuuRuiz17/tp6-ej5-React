import { Form, Button, FormText} from 'react-bootstrap';
import ListaTareas from './listaTareas';
import { useForm } from 'react-hook-form';
import { useState } from 'react';

const formularioTareas = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm() 

    const [tareas , setTareas] = useState([])

    const agregarTarea = (dato) => {
        console.log(dato.tarea);
        setTareas([...tareas, dato.tarea]); 
        reset();
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(agregarTarea)}>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control type="text" placeholder="Ingresa una tarea" {...register('tarea' , {
                        required: 'La tarea es un campo obligatorio',
                        minLength: {
                            value: 3,
                            message: 'La tarea debe contener como mínimo 3 caracteres'
                        },
                        maxLength: {
                            value: 50,
                            message: 'La tarea debe contener hasta 50 caracteres.'
                        }
                    })}/>
                    <Button variant='info ms-3'>➕</Button>
                </Form.Group>
                <Form.Text className='text-danger'>{errors.tarea?.message}</Form.Text>
            </Form>
            <ListaTareas tareas={tareas}></ListaTareas>
        </div>
    );
};

export default formularioTareas;