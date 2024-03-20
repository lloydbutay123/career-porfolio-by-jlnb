import "./App.css";
import NavBar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Banner from "./components/Banner";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { AnimatePresence } from "framer-motion";
import ThankyouMessage from "./components/ThankyouMessage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <NavBar />
      <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname} basename="/career-porfolio-by-jlnb">
        <Route path="/" element={<Banner />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/thankyou" element={<ThankyouMessage />}></Route>
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
