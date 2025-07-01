import { Form, Button, FormText} from 'react-bootstrap';
import ListaTareas from './listaTareas';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

const formularioTareas = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm() 

    const tareasLocalStorage = JSON.parse(localStorage.getItem('tareas')) || [];
    const [tareas, setTareas] = useState([tareasLocalStorage]);

    useEffect(()=>{
        // Ejecuta automáticamente este código cuando suceda el ciclo de vida del componente
        console.log("Hola desde useEffect 😍");
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }, [tareas])

    const agregarTarea = (dato) => {
        console.log(dato.tarea);
        setTareas([...tareas, dato.tarea]); 
        reset();
    }

    const borrarTarea = (nombreTarea) => {
    // Filtrar el state tareas
    const tareasFiltradas = tareas.filter((itemTarea) => itemTarea !== nombreTarea);
    // Actualizamos el state
    setTareas(tareasFiltradas);
    }

    return (
        <div>
            <Form onSubmit={handleSubmit(agregarTarea)}>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    <Form.Control  className='bg-light' type="text" placeholder="Ingresa una tarea" {...register('tarea' , {
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
            <ListaTareas tareas={tareas} borrarTarea = {borrarTarea}></ListaTareas>
        </div>
    );
};

export default formularioTareas;