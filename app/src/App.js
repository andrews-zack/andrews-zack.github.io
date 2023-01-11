import { Routes, Route } from "react-router-dom"
import Contactcard from "./components/Contactcard";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import About from "./components/About";
import './css/style.css'

function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contactcard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;
