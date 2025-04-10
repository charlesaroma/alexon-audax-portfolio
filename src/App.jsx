//navigation imports
import Navbar from "./components/navigation/navbar.jsx";
import Footer from "./components/navigation/footer.jsx";

//pages imports
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen relative bg-[var(--color-primary-980)] text-text flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<div className="min-h-screen flex items-center justify-center text-[var(--color-primary-500)]">Portfolio Page (Coming Soon)</div>} />
            <Route path="/gallery" element={<div className="min-h-screen flex items-center justify-center text-[var(--color-primary-500)]">Gallery Page (Coming Soon)</div>} />
            <Route path="/contact" element={<div className="min-h-screen flex items-center justify-center text-[var(--color-primary-500)]">Contact Page (Coming Soon)</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
