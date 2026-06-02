import { useState, useEffect, useMemo } from 'react';

function App() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [duracion, setDuracion] = useState('');

  // Cálculo optimizado con useMemo
  const calcularTiempoTotal = useMemo(() => {
    console.log('Calculando tiempo total...');
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0);
  }, [tareas]);

  // Actualiza el título de la pestaña
  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`;
  }, [calcularTiempoTotal]);

  // Agregar tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '' && duracion !== '') {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion),
      };

      setTareas([...tareas, nuevaTareaObj]);
      setNuevaTarea('');
      setDuracion('');
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.titulo}>⏱️ Contador de Tareas</h1>

        <div style={styles.formulario}>
          <input
            type="text"
            placeholder="Nombre de la tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            style={styles.input}
          />

          <input
            type="number"
            placeholder="Minutos"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            style={styles.input}
          />

          <button onClick={agregarTarea} style={styles.boton}>
            Agregar
          </button>
        </div>

        <h2 style={styles.subtitulo}>Tareas Registradas</h2>

        {tareas.length === 0 ? (
          <p>No hay tareas registradas.</p>
        ) : (
          <ul style={styles.lista}>
            {tareas.map((tarea, index) => (
              <li key={index} style={styles.item}>
                {tarea.nombre} - {tarea.duracion} min
              </li>
            ))}
          </ul>
        )}

        <h3 style={styles.total}>
          Total de tiempo: {calcularTiempoTotal} minutos
        </h3>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
  },

  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '15px',
    width: '500px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
  },

  titulo: {
    textAlign: 'center',
    color: '#000',
    marginBottom: '20px',
  },

  subtitulo: {
    color: '#000',
  },

  formulario: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
  },

  input: {
    flex: 1,
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },

  boton: {
    backgroundColor: '#4caf50',
    color: 'white',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
  },

  lista: {
    paddingLeft: '20px',
  },

  item: {
    marginBottom: '8px',
  },

  total: {
    marginTop: '20px',
    color: '#333',
  },
};

export default App;