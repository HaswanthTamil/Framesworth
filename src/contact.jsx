import React from "react"
import { Link } from "react-router-dom"

const Contact = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Itim', sans-serif",
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
          marginBottom: "2rem",
          fontSize: "2.2rem",
          color: "#5E503F",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Contact Us
      </h1>

      <p style={{ fontSize: "1.5rem", textAlign: "center" }}>
        Reach out to us via the details below:
      </p>

      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Name: Haswanth Tamil
        </p>
        <p
          style={{
            fontSize: "1.2rem",
            fontWeight: "bold",
          }}
        >
          Email:{" "}
          <a
            href="haswanthtamilofficial@gmail"
            style={{
              fontSize: "1.2rem",
              color: "#F1E7DA",
              fontWeight: "normal",
            }}
          >
            haswanthtamilofficial@gmail.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default Contact
