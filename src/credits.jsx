import React from "react"
import { Link } from "react-router-dom"

const Credits = () => {
  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "'Itim', sans-serif",
        color: "#F1E7DA",
        backgroundColor: "#9C866B",
        height: "100vh",
      }}
    >
      <h1
        style={{
          marginBottom: "2rem",
          fontSize: "2.2rem",
          color: "#5E503F",
          textAlign: "center",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        Credits
      </h1>
      <div style={{ marginBottom: "1rem" }}>
        <h2 style={{ fontSize: "1.5rem", color: "#5E503F" }}>
          Special Thanks to:
        </h2>
        <ul
          style={{
            listStyleType: "none",
            paddingLeft: 0,
          }}
        >
          <li>
            <a
              href="https://unsplash.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#F1E7DA",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Unsplash.com for their API and beautiful photography
            </a>
          </li>
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#F1E7DA",
                textDecoration: "none",
                fontSize: "1.2rem",
              }}
            >
              Vercel.com for hosting this app
            </a>
          </li>
          <li>
            <span style={{ fontSize: "1.2rem" }}>
              All the amazing photographers who have contributed their work to
              Unsplash
            </span>
          </li>
        </ul>
      </div>
      <div>
        <Link
          to="/"
          style={{
            color: "#5E503F",
            textDecoration: "none",
            fontSize: "1.2rem",
            borderBottom: "2px solid #5E503F",
            paddingBottom: "0.2rem",
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default Credits
