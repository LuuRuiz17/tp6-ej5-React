import { Form, Button, FormText } from 'react-bootstrap';
import ListaTareas from './listaTareas';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { crearTarea } from '../helpers/queries';

const formularioTareas = () => {
    const {
        // Cuando haga click en el botón, va a actuarl el handleSubmit y va a llamar a las validaciones. Si la validación es exitosa, se va a ejecutar la función que definimos  
        // Register es una librería en la que se registra cada cosa que tiene el formulario (inputs, selects, etc.). Le indico que registre x cosa con un nombre, y a eso debe validarle x cosa.
        register,
        handleSubmit,
        formState: { errors },
        // Lo agrego para limpiar el formulario
        reset
    } = useForm()

    const tareasLocalStorage = JSON.parse(localStorage.getItem('tareas')) || [];
    const [tareas, setTareas] = useState(tareasLocalStorage);

    useEffect(() => {
        // Ejecuta automáticamente este código cuando suceda el ciclo de vida del componente
        // console.log("Hola desde useEffect 😍");
        // Solo actualiza el localStorage si hay al menos una tarea
        if (tareas.length > 0) {
            localStorage.setItem('tareas', JSON.stringify(tareas));
        }
    }, [tareas]);

    // Función que se va a ejecutar si las validaciones que maneja el handlesubmit son exitosas
    const agregarTarea = async (dato) => {
        console.log(dato.tarea);
        // ... sirve para iterar sobre el array y copiar cada uno de los elementos. Lo uso porque no puede manipular directamente el state. En otras palabras, estoy duplicando mi array en otro lado para poder modificarlo y después cambiarle el valor al state con setState.
        // dato.tarea es lo ques escribió el usuario en el input.
        const respuesta = await crearTarea(dato)
        if(respuesta.status === 201){
            console.log("Tarea creada correctamente")
            setTareas([...tareas, dato.tarea]);
        }else{
            console.log("No se pudo crear la tarea")
        }
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
            {/* Invoco el handleSubmit para que realice las validaciones. Ya incluye internamente lo del preventDefault para que no se recargue la página*/}
            <Form onSubmit={handleSubmit(agregarTarea)}>
                <Form.Group className="mb-3 d-flex" controlId="exampleForm.ControlInput1">
                    {/* register pide dos cosas: 1- Registrar con un nombre el elemento, en este caso el input. Desde ahora, cuando quiera hacer referencia al input, la librería lo reconoce como "tarea". 2- Después se agregan las validaciones entre {}. */}
                    <Form.Control className='bg-light' type="text" placeholder="Ingresa una tarea" {...register('tarea', {
                        required: 'La tarea es un campo obligatorio',
                        minLength: {
                            value: 3,
                            message: 'La tarea debe contener como mínimo 3 caracteres'
                        },
                        maxLength: {
                            value: 50,
                            message: 'La tarea debe contener hasta 50 caracteres.'
                        }
                    })} />
                    <Button variant='info ms-3'>➕</Button>
                </Form.Group>
                {/* Si ocurre algún error, el objeto errors va a mostrarlo aquí, si no existe lo mantiene oculto. El ?. significa que la propieda es optativa */}
                <Form.Text className='text-danger'>{errors.tarea?.message}</Form.Text>
            </Form>
            <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
        </div>
    );
};

export default formularioTareas;