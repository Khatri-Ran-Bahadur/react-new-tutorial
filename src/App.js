import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import About from "./pages/About/About";
import ContactUs from "./pages/Contactus/ContactUs";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="about" element={<About />} />
          <Route path="contact-us" element={<ContactUs />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}

export default App;
