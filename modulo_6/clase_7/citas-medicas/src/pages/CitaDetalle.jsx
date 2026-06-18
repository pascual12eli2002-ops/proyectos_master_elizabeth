import { useParams } from "react-router-dom";

function CitaDetalle() {
  const { id } = useParams();

  return (
    <div className="container">
      <h1>Detalle de la Cita</h1>

      <p>ID: {id}</p>
    </div>
  );
}

export default CitaDetalle;