import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NuevaCita({ agregarCita }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    paciente: "",
    doctor: "",
    fecha: "",
    hora: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    agregarCita(form);

    navigate("/citas");
  };

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Nueva Cita</h2>

        <input
          type="text"
          name="paciente"
          placeholder="Paciente"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor"
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="fecha"
          onChange={handleChange}
          required
        />

        <input
          type="time"
          name="hora"
          onChange={handleChange}
          required
        />

        <button className="btn btn-primary">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default NuevaCita;