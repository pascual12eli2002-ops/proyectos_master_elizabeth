import CitaCard from "../components/CitaCard";

function Citas({ citas, eliminarCita }) {
  return (
    <div className="container">
      <h1>Mis Citas</h1>

      {citas.length === 0 ? (
        <p>No hay citas registradas.</p>
      ) : (
        citas.map((cita) => (
          <CitaCard
            key={cita.id}
            cita={cita}
            eliminarCita={eliminarCita}
          />
        ))
      )}
    </div>
  );
}

export default Citas;