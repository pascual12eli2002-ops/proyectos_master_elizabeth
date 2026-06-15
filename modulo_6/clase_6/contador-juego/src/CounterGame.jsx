import {
  useReducer,
  useRef,
  useEffect,
  useCallback,
} from "react";

const initialState = {
  count: 0,
  history: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
        history: [
          ...state.history,
          `+1 (Nuevo valor: ${state.count + 1})`,
        ],
      };

    case "decrement":
      return {
        count: state.count - 1,
        history: [
          ...state.history,
          `-1 (Nuevo valor: ${state.count - 1})`,
        ],
      };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

function CounterGame() {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
  );

  const incrementBtnRef = useRef(null);

  useEffect(() => {
    incrementBtnRef.current.focus();
  }, []);

  const handleIncrement = useCallback(() => {
    dispatch({ type: "increment" });
  }, []);

  const handleDecrement = useCallback(() => {
    dispatch({ type: "decrement" });
  }, []);

  const handleReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);


  return (
  <div style={styles.container}>
    <div style={styles.card}>
      <h1 style={styles.title}>
        🔢 Contador Interactivo
      </h1>

      <h2 style={styles.counter}>
        {state.count}
      </h2>

      <div>
        <button
          ref={incrementBtnRef}
          onClick={handleIncrement}
          style={styles.button}
        >
          ➕
        </button>

        <button
          onClick={handleDecrement}
          style={styles.button}
        >
          ➖
        </button>

        <button
          onClick={handleReset}
          style={styles.button}
        >
          🔄
        </button>
      </div>

      <h3 style={styles.subtitle}>
        Historial
      </h3>

      <ul style={styles.list}>
        {state.history.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
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
    background: "linear-gradient(135deg, #dbeafe, #93c5fd)",
  },

  card: {
    backgroundColor: "#ffffff",
    padding: "35px",
    borderRadius: "20px",
    width: "500px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  title: {
    color: "#000",
    fontSize: "2rem",
    marginBottom: "20px",
  },

  counter: {
    color: "#000",
    fontSize: "4rem",
    fontWeight: "bold",
    margin: "20px 0",
  },

  subtitle: {
    color: "#000",
    marginTop: "25px",
    marginBottom: "15px",
  },

  button: {
    margin: "8px",
    padding: "12px 18px",
    fontSize: "22px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    backgroundColor: "#2563eb",
    color: "#fff",
    fontWeight: "bold",
  },

  list: {
    textAlign: "left",
    marginTop: "15px",
    color: "#000",
    fontSize: "18px",
    maxHeight: "180px",
    overflowY: "auto",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f8fafc",
  },
};

export default CounterGame;