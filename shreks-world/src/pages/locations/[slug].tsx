import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const locationDetails = {
  swamp: {
    name: "Shrek's Swamp",
    image: "/images/swamp.png",
    description: "A peaceful, murky place where Shrek lives.",
  },
};

const LocationDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const location = locationDetails[slug as keyof typeof locationDetails];

  if (!location) {
    return (
      <Layout>
        <p>Location not found.</p>
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
        <h2 style={{ color: "#4caf50", fontWeight: "bold" }}>{location.name}</h2>
        <img
          src={location.image}
          alt={location.name}
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "8px",
            objectFit: "cover",
            margin: "1rem auto",
          }}
        />
        <p style={{ color: "#555", fontSize: "1.2rem", marginTop: "1rem" }}>{location.description}</p>
      </div>
    </Layout>
  );
};

export default LocationDetailPage;