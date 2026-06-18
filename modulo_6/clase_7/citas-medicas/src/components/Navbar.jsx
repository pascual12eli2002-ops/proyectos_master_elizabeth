import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>🏥 Citas Médicas</h2>

      <div>
        <Link to="/">Inicio</Link>
        <Link to="/citas">Mis Citas</Link>
        <Link to="/nueva-cita">Nueva Cita</Link>
      </div>
    </nav>
  );
}

export default Navbar;