import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/NavBar/Navbar";
import MatLam from "./Pages/MatLam/MatLam";
import Realesto from "./Pages/Realesto/Realesto";
import ScrollToTop from "./Components/ScrollToTop";
import { usePageTracking } from "./usePageTracking";

function App() {
  usePageTracking();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<MatLam />} />
        <Route path="/realesto" element={<Realesto />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
