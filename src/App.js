import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar"; // Corrected import
import { Inicio } from "./components/pages/Inicio";
import { QuemSomos } from "./components/pages/QuemSomos";
import { QueroAdotar } from "./components/pages/QueroAdotar";
import { Contato } from "./components/pages/Contato";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/quero-adotar" element={<QueroAdotar />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>
  );
}

export default App;

