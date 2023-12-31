import "@fontsource/open-sans/300-italic.css";
import { useNavigate } from "react-router-dom";
import "../styles/Homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div>
        <div style={{ fontSize: "4.2rem" }}>
          Redefining{" "}
          <span
            style={{
              textDecoration: "underline",
              fontStyle: "italic",
              textDecorationColor: "#53CA61",
              textUnderlineOffset: "1rem",
            }}
          >
            Sustainable
          </span>{" "}
          Investing<span style={{ color: "#53CA61" }}>.</span>
        </div>
        <div style={{ marginTop: "1.2rem" }}>
          <div style={{ fontSize: "1.3rem" }}>
            Ecometrics offers deep insight into the sustainability of your
            portfolio, empowering investors to make more informed and
            sustainable financial choices
            <span style={{ color: "#53CA61" }}>.</span>
          </div>
        </div>
        <button
          onClick={() => {
            navigate("/evaluate");
          }}
          style={{
            borderRadius: "5px",
            backgroundColor: "#35AC43",
            marginTop: "3rem",
            fontSize: "1.2rem",
            paddingBlock: "0.8",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HomePage;
