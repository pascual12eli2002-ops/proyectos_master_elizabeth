import { Link } from "react-router-dom";

function CitaCard({ cita, eliminarCita }) {
  return (
    <div className="card">
      <h3>{cita.paciente}</h3>

      <p>👨‍⚕️ {cita.doctor}</p>
      <p>📅 {cita.fecha}</p>
      <p>🕒 {cita.hora}</p>

      <div className="acciones">
        <Link
          className="btn btn-primary"
          to={`/cita/${cita.id}`}
        >
          Ver
        </Link>

        <Link
          className="btn btn-warning"
          to={`/editar/${cita.id}`}
        >
          Editar
        </Link>

        <button
          className="btn btn-danger"
          onClick={() => eliminarCita(cita.id)}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default CitaCard;