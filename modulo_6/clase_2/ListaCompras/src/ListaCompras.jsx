import { useState } from "react";

function ListaCompras() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState("");

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== "") {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto("");
    }
  };

  const eliminarProducto = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={{ color: "#000000" }}>
          🛒 Lista de Compras
        </h2>

        <div style={styles.inputGroup}>
          <input
            type="text"
            placeholder="Agregar producto..."
            value={nuevoProducto}
            onChange={(e) => setNuevoProducto(e.target.value)}
            style={styles.input}
          />

          <button onClick={agregarProducto} style={styles.btnAgregar}>
            Agregar
          </button>
        </div>

        <ul style={styles.lista}>
          {productos.map((producto, index) => (
            <li key={index} style={styles.item}>
              {producto}

              <button
                onClick={() => eliminarProducto(index)}
                style={styles.btnEliminar}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>

        <p>Total de productos: {productos.length}</p>
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
    background: "#0d0d0d",
  },

  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "15px",
    width: "400px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
  },

  inputGroup: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },

  input: {
    flex: 1,
    padding: "10px",
  },

  btnAgregar: {
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    padding: "10px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },

  lista: {
    listStyle: "none",
    padding: 0,
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px",
    padding: "10px",
    backgroundColor: "#f8f8f8",
    borderRadius: "5px",
  },

  btnEliminar: {
    backgroundColor: "#e53935",
    color: "white",
    border: "none",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default ListaCompras;