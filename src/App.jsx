import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./home"
import About from "./about"
import Credits from "./credits"
import Contact from "./contact"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/credits" element={<Credits />}></Route>
      </Routes>
    </div>
  )
}

export default App
