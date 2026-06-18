import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <h1>Sistema de Gestión de Citas Médicas</h1>

      <p>
        Agenda, consulta y administra tus citas
        de forma rápida y sencilla.
      </p>

      <div className="acciones-home">
        <Link className="btn btn-primary" to="/citas">
          Ver Citas
        </Link>

        <Link className="btn btn-success" to="/nueva-cita">
          Nueva Cita
        </Link>
      </div>
    </div>
  );
}

export default Home;