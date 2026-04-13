import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MatLam from "./Pages/MatLam/MatLam";
import Realesto from "./Pages/Realesto/Realesto";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MatLam />} />
        <Route path="/realesto" element={<Realesto />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
