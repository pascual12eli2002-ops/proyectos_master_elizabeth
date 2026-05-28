function Tarjeta() {
  const nombre = "Elizabeth Pascual García";
  const profesion = "Desarrolladora Backend";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Círculo para foto */}
        <div style={styles.imagen}></div>

        <h2 style={styles.nombre}>{nombre}</h2>

        <h4 style={styles.profesion}>{profesion}</h4>

        <p style={styles.mensaje}>{mensaje}</p>

        <button style={styles.boton}>Contactar</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(to right, #667eea, #764ba2)",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "320px",
    padding: "30px",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    fontFamily: "Arial",
  },

  imagen: {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#e0e0e0",
    margin: "0 auto 20px auto",
    border: "4px solid #6c63ff",
  },

  nombre: {
    color: "#000000",
    marginBottom: "10px",
  },

  profesion: {
    color: "#6c63ff",
    marginBottom: "15px",
  },

  mensaje: {
    color: "#555",
    marginBottom: "20px",
  },

  boton: {
    backgroundColor: "#6c63ff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default Tarjeta;