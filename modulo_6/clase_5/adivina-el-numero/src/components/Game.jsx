import { useState } from "react";
import InputNumber from "./InputNumber";
import Message from "./Message";
import RestartButton from "./RestartButton";

function Game() {
  const [numeroSecreto, setNumeroSecreto] = useState(
    // eslint-disable-next-line react-hooks/purity
    Math.floor(Math.random() * 100) + 1
  );

  const [numeroIngresado, setNumeroIngresado] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [intentos, setIntentos] = useState(0);

  const verificarNumero = () => {
    
    const numero = parseInt(numeroIngresado);

    if (isNaN(numero)) {
      setMensaje("Ingresa un número válido");
      return;
    }

    setIntentos(intentos + 1);

    if (numero === numeroSecreto) {
      setMensaje("🎉 ¡Correcto!");
    } else if (numero < numeroSecreto) {
      setMensaje("📈 El número es mayor");
    } else {
      setMensaje("📉 El número es menor");
    }
  };

  const reiniciarJuego = () => {
    setNumeroSecreto(Math.floor(Math.random() * 100) + 1);
    setNumeroIngresado("");
    setMensaje("");
    setIntentos(0);
  };

  return (
    <div className="game-container">
      <h1>Adivina el Número</h1>

      <p>Estoy pensando en un número entre 1 y 100.</p>

      <InputNumber
        value={numeroIngresado}
        onChange={setNumeroIngresado}
      />

      <br />
      <br />

      <button onClick={verificarNumero}>
        Comprobar
      </button>

      {mensaje && <Message mensaje={mensaje} />}

      <p>Intentos: {intentos}</p>

      <RestartButton onRestart={reiniciarJuego} />
    </div>
  );
}

export default Game;