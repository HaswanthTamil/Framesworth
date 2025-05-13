import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const SideBar = ({ sideBarOpen, setSideBarOpen }) => {
  return (
    <div className={`sideBar ${sideBarOpen ? "open" : ""}`}>
      <div className="navOption">
        <Link to="/" onClick={() => setSideBarOpen(false)}>
          Home
        </Link>
      </div>

      <div className="navOption">
        <Link to="../about" onClick={() => setSideBarOpen(false)}>
          About
        </Link>
      </div>

      <div className="navOption">
        <Link to="/contact" onClick={() => setSideBarOpen(false)}>
          Contact
        </Link>
      </div>

      <div className="navOption">
        <Link to="/credits" onClick={() => setSideBarOpen(false)}>
          Credits
        </Link>
      </div>
    </div>
  )
}

export default SideBar
