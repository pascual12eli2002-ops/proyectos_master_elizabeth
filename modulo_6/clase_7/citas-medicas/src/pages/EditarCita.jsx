import { useParams } from "react-router-dom";

function EditarCita() {
  const { id } = useParams();

  return (
    <div className="container">
      <h2>Editar Cita</h2>

      <p>Editando cita #{id}</p>
    </div>
  );
}

export default EditarCita;