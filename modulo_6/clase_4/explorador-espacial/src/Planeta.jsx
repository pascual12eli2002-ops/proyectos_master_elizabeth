import { useEffect } from "react";

function Planeta({ nombre }) {
  useEffect(() => {
    console.log(`¡El planeta ${nombre} ha aparecido!`);

    return () => {
      console.log(`¡El planeta ${nombre} ha desaparecido!`);
    };
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        padding: "30px",
        borderRadius: "20px",
        textAlign: "center",
        color: "#000", 
      }}
    >
      🌍 {nombre}
    </div>
  );
}

export default Planeta;