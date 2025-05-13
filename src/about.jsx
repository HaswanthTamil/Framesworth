import React from "react"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <div
      className="aboutPage"
      style={{
        padding: "2rem",
        fontFamily: "Itim, sans-serif",
        color: "#F1E7DA",
        backgroundColor: "#9C866B",
        height: "100vh",
        position: "relative",
      }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <button
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            padding: "0.2rem 0.6rem",
            backgroundColor: "#F1E7DA",
            color: "#5E503F",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onTouchStart={(e) => (e.target.style.border = "1px solid aliceblue")}
          onTouchEnd={(e) => (e.target.style.border = "1px solid transparent")}
        >
          Home
        </button>
      </Link>
      <h1
        style={{
          marginBottom: "1rem",
          fontSize: "2.2rem",
          color: "#5E503F",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        About Framesworth
      </h1>
      <p style={{ marginBottom: "1rem" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This stock photo app is built to deliver
        high-quality visuals with a warm, earthy aesthetic. Whether you're a
        designer, content creator, or just a casual browser, we've made sure you
        can explore and download stunning photos with ease.
      </p>
      <p style={{ marginBottom: "2rem" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;Built using <strong>React</strong>, styled with
        thoughtful colors, and engineered with performance and beauty in mind.
        Powered by passion, pixels, and way too many cups of coffee.
      </p>

      <h2
        style={{
          marginBottom: "1rem",
          color: "#5E503F",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        About Us
      </h2>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;We’re a small team of curious minds and pixel
        lovers — or maybe it’s just one ambitious dev (👋🏽 looking at you, Panji)
        chasing the dream of building clean, useful, and aesthetic digital
        experiences.
      </p>
      <p style={{ marginTop: "1rem" }}>
        &nbsp;&nbsp;&nbsp;&nbsp;This app is just the beginning. Stay tuned for
        more ideas, more color palettes, and a sprinkle of ✨chaos✨ in the best
        way.
      </p>
    </div>
  )
}

export default About
