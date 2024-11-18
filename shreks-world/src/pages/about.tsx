import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
          padding: "2rem",
          backgroundColor: "#e8f5e9",
          borderRadius: "8px",
        }}
      >
        <h2 style={{ color: "#4caf50", fontWeight: "bold" }}>About Shrek's World</h2>
        <p style={{ color: "#555", fontSize: "1.2rem", marginTop: "1rem", lineHeight: "1.6" }}>
          Shrek's World is a magical place filled with quirky characters, memorable locations, and
          timeless stories. Dive into this universe to learn more about Shrek, Fiona, Donkey, and
          more!
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;