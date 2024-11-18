import Link from "next/link";
import Layout from "../../components/Layout";
import { useCounter } from "../../context/CounterContext";

const characters = [
  { name: "Shrek", slug: "shrek", image: "/images/shrek.png", description: "A lovable ogre." },
  { name: "Fiona", slug: "fiona", image: "/images/fiona.png", description: "An adventurous princess." },
  { name: "Donkey", slug: "donkey", image: "/images/donkey.png", description: "Shrek's loyal (and talkative) friend." },
];

const CharactersPage = () => {
  const { counter, increment } = useCounter();

  return (
    <Layout>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2>Increment counter here!</h2>
        <p>
          <strong>Current count:</strong> {counter}
        </p>
        <button
          onClick={increment}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
      </div>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        {characters.map((character) => (
          <div key={character.slug} className="character-card">
            <Link href={`/characters/${character.slug}`}>
              <img
                src={character.image}
                alt={character.name}
                className="character-image"
              />
            </Link>
            <h3 style={{ marginTop: "1rem", color: "#4caf50" }}>{character.name}</h3>
            <p style={{ color: "#555" }}>{character.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default CharactersPage;