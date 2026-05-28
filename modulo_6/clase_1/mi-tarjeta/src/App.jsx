import Tarjeta from './Tarjeta';

function App() {
  return (
    <div style={styles.container}>
      <Tarjeta />
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
};

export default App;