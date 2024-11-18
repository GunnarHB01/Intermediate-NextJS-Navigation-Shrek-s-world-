import { useRouter } from "next/router";
import Layout from "../../components/Layout";

const SearchResultsPage = () => {
  const router = useRouter();
  const query = router.query.q as string;

  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2 style={{ color: "#4caf50" }}>Search Results</h2>
        <p>
          <strong>Search:</strong> {query}
        </p>
        <p>{query}</p>
        <a
          href="/search"
          style={{
            display: "block",
            marginTop: "1rem",
            color: "#4caf50",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          Go back to search
        </a>
      </div>
    </Layout>
  );
};

export default SearchResultsPage;