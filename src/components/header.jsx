import React from "react"

const Header = ({ toggleSideBar }) => {
  return (
    <header className="header">
      <button className="navBtn" onClick={toggleSideBar}>
        <img src="/navBtn.svg" alt="☰"></img>
      </button>
      <h1 className="title">Framesworth</h1>
    </header>
  )
}

export default Header
