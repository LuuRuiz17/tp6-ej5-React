import { ListGroup, Button } from "react-bootstrap";
import { borrarTarea, editarTarea, obtenerTarea } from "../helpers/queries";
import Swal from "sweetalert2";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useEffect } from "react";

const ItemTarea = ({ nombreTarea, id }) => {
  useEffect(() => {
    cargarTarea();
  }, []);

  const cargarTarea = async () => {
    const respuesta = await obtenerTarea(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      console.log(datos);
    } else {
      console.log("Error al obtener la tarea");
    }
  };

  const eliminarTarea = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await borrarTarea(id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminada!",
            text: "Tu tarea ha sido eliminada.",
            icon: "success",
          });
        } else {
          Swal.fire({
            title: "Error!",
            text: "Tu tarea no pudo ser eliminada.",
            icon: "error",
          });
        }
      }
    });
  };

  const actualizarTarea = async () => {
    const { value: nuevoNombre } = await Swal.fire({
      title: "Editar tarea",
      input: "text",
      inputLabel: "Nuevo nombre de la tarea",
      inputValue: nombreTarea,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
        if (!value) {
          return "El nombre no puede estar vacío";
        }
      },
    });

    if (nuevoNombre) {
      const respuesta = await editarTarea(id, { nombreTarea: nuevoNombre });
      if (respuesta.status === 200) {
        Swal.fire({
          title: "Editada!",
          text: "Tu tarea ha sido editada.",
          icon: "success",
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "Tu tarea no pudo ser editada.",
          icon: "error",
        });
      }
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between bg-light">
      {nombreTarea}
      <div>
        <Button className="me-3" variant="warning" onClick={actualizarTarea}>
          <i className="text-light bi bi-pencil"></i>
        </Button>
        <Button variant="danger" onClick={eliminarTarea}>
          <i className="bi bi-x-lg"></i>
        </Button>
      </div>
    </ListGroup.Item>
  );
};

export default ItemTarea;