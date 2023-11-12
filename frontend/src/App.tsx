import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About.tsx";
import HomePage from "./pages/Homepage.tsx";
import Layout from "./pages/Layout/Layout";
import UploadPortfolio from "./pages/UploadPortfolio.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />

        <Route path="/evaluate" element={<UploadPortfolio />} />
      </Route>
    </Routes>
  );
}
export default App;
