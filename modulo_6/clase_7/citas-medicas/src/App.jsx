import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Citas from "./pages/Citas";
import NuevaCita from "./pages/NuevaCita";
import EditarCita from "./pages/EditarCita";
import CitaDetalle from "./pages/CitaDetalle";
import NotFound from "./pages/NotFound";

import citasIniciales from "./data/citas";

import "./app.css";
import "./styles/app.css";
function App() {
  const [citas, setCitas] = useState(citasIniciales);

  const agregarCita = (nuevaCita) => {
    setCitas([
      ...citas,
      {
        ...nuevaCita,
        id: Date.now()
      }
    ]);
  };

  const eliminarCita = (id) => {
    setCitas(
      citas.filter((cita) => cita.id !== id)
    );
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/citas"
          element={
            <Citas
              citas={citas}
              eliminarCita={eliminarCita}
            />
          }
        />

        <Route
          path="/nueva-cita"
          element={
            <NuevaCita
              agregarCita={agregarCita}
            />
          }
        />

        <Route
          path="/editar/:id"
          element={<EditarCita />}
        />

        <Route
          path="/cita/:id"
          element={<CitaDetalle />}
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;