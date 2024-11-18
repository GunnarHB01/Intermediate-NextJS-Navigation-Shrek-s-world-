import Layout from "../components/Layout";
import { useCounter } from "../context/CounterContext";

const HomePage = () => {
  const { counter, increment } = useCounter();

  return (
    <Layout>
      <div style={{ textAlign: "center", padding: "2rem", backgroundColor: "#d1e7dd", borderRadius: "8px" }}>
        <h2>Welcome to Shrek's World!</h2>
        <p>Explore the magical swamp and meet its quirky inhabitants!</p>
        <p>
          <strong>Counter value:</strong> {counter}
        </p>
        <button onClick={increment} style={{ padding: "0.5rem 1rem", backgroundColor: "#4caf50", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
          Increment Counter
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "2rem" }}>
        <div style={{ padding: "1rem", backgroundColor: "#e8f5e9", borderRadius: "8px", textAlign: "center", width: "30%" }}>
          <h3>Characters</h3>
          <p>Meet Shrek, Fiona, Donkey, and more!</p>
        </div>
        <div style={{ padding: "1rem", backgroundColor: "#e8f5e9", borderRadius: "8px", textAlign: "center", width: "30%" }}>
          <h3>Locations</h3>
          <p>Visit iconic places like Shrek's swamp and Duloc.</p>
        </div>
        <div style={{ padding: "1rem", backgroundColor: "#e8f5e9", borderRadius: "8px", textAlign: "center", width: "30%" }}>
          <h3>About</h3>
          <p>Learn more about the Shrek universe!</p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;