import Link from "next/link";
import Layout from "../components/Layout";

const locations = [
  {
    name: "Shrek's Swamp",
    slug: "swamp",
    image: "/images/swamp.png",
    description: "A peaceful, murky place where Shrek lives.",
  },
];

const LocationsPage = () => {
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        {locations.map((location) => (
          <div
            key={location.slug}
            style={{
              textAlign: "center",
              padding: "1.5rem",
              backgroundColor: "#e8f5e9",
              borderRadius: "8px",
              width: "300px",
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Link href={`/locations/${location.slug}`}>
              <img
                src={location.image}
                alt={location.name}
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </Link>
            <h3 style={{ marginTop: "1rem", color: "#4caf50" }}>{location.name}</h3>
            <p style={{ color: "#555" }}>{location.description}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default LocationsPage;