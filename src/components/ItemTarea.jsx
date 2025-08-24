import { ListGroup, Button } from "react-bootstrap";
import { borrarTarea } from "../helpers/queries";
import Swal from "sweetalert2";

const ItemTarea = ({ nombreTarea, id}) => {
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
        }else{
        Swal.fire({
            title: "Error!",
            text: "Tu tarea no pudo ser eliminada.",
            icon: "error",
          });
        }
      }
    });
  };
  return (
    <ListGroup.Item className="d-flex justify-content-between bg-light">
      {nombreTarea}
      <Button variant="danger" onClick={eliminarTarea}>
        ✖️
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
