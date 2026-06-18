import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="container">
      <h1>404</h1>

      <p>Página no encontrada.</p>

      <Link className="btn btn-primary" to="/">
        Volver al inicio
      </Link>
    </div>
  );
}

export default NotFound;