import "./App.css";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Places from "./Components/Places";
import Modal from "./Components/Modal";
import { useState } from "react";
function App() {
  const [modal, setModal] = useState(false);
  return (
    <Router>
      <div className="flex h-screen justify-between flex-col">
        <Nav modal={modal} setModal={setModal} />
        {modal && <Modal modal={modal} setModal={setModal} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/places" element={<Places />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
