import { StrictMode } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import React from "react"
import { BrowserRouter } from "react-router-dom"

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
)
