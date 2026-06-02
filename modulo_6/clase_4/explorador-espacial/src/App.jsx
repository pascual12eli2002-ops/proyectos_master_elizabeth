import { useState, useEffect, useMemo } from "react";
import Planeta from "./Planeta";

function App() {
  const [distancia, setDistancia] = useState(0);
  const [combustible, setCombustible] = useState(100);
  const [estadoNave, setEstadoNave] = useState("En órbita");
  const [planetasVisitados, setPlanetasVisitados] = useState([]);

  // MONTAJE Y DESMONTAJE
  useEffect(() => {
    console.log("¡El panel de control está listo!");

    const intervalo = setInterval(() => {
      setDistancia((prev) => prev + 100);
      setCombustible((prev) => Math.max(prev - 5, 0));
    }, 1000);

    return () => {
      clearInterval(intervalo);
      console.log("El panel de control se ha apagado.");
    };
  }, []);

  // ACTUALIZACIÓN
  useEffect(() => {
    console.log("¡Combustible actualizado!");
  }, [combustible]);

  // useMemo
  const mensajeEstado = useMemo(() => {
    return `🚀 Estado de la nave: ${estadoNave}`;
  }, [estadoNave]);

  const aterrizar = () => {
    setEstadoNave("Aterrizando");

    setPlanetasVisitados([
      ...planetasVisitados,
      `Planeta ${planetasVisitados.length + 1}`,
    ]);
  };

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <h1>🚀 Panel del Explorador Espacial</h1>

        <h3>📏 Distancia: {distancia} km</h3>
        <h3>⛽ Combustible: {combustible}%</h3>
        <h3>{mensajeEstado}</h3>

        <button style={styles.boton} onClick={aterrizar}>
          Aterrizar
        </button>

        <h2>🪐 Planetas Visitados</h2>

        {planetasVisitados.length === 0 ? (
          <p>Aún no se han visitado planetas.</p>
        ) : (
          planetasVisitados.map((planeta, index) => (
            <Planeta key={index} nombre={planeta} />
          ))
        )}
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
    color: "#000", 

  },

  panel: {
    backgroundColor: "#ffffff",
    padding: "30px",
    borderRadius: "15px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.0)",
  },

  boton: {
    backgroundColor: "#2563eb",
    color: "#000",
    border: "none",
    padding: "10px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default App;