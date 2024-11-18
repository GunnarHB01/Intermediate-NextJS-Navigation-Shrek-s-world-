import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const characterDetails = {
  shrek: { name: "Shrek", image: "/images/shrek.png" },
  fiona: { name: "Fiona", image: "/images/fiona.png" },
  donkey: { name: "Donkey", image: "/images/donkey.png" },
};

const CharacterDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const character = characterDetails[slug as keyof typeof characterDetails];

  if (!character) {
    return (
      <Layout>
        <p>Character not found.</p>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "2rem",
        }}
      >
        <h2 style={{ color: "#4caf50", fontWeight: "bold" }}>{character.name}</h2>
        <img
          src={character.image}
          alt={character.name}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "16px",
            objectFit: "cover",
            objectPosition: "center top",
            margin: "1rem auto",
          }}
        />
      </div>
    </Layout>
  );
};

export default CharacterDetailPage;