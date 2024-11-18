import { useRouter } from "next/router";
import Layout from "../components/Layout";

const SearchPage = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;
    router.push(`/search/results?q=${query}`);
  };

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2 style={{ color: "#4caf50", marginBottom: "1rem" }}>Search</h2>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="query"
            placeholder="Search..."
            style={{
              padding: "0.5rem",
              width: "200px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginBottom: "1rem",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "0.5rem 1rem",
              backgroundColor: "#4caf50",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default SearchPage;