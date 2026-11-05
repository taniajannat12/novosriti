"use client";

import "./landing.css";

const planets = [
  {
    name: "EARTH",
    className: "earth",
    image:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/esd/climate/2023/12/ImageWall5_1920x1200-80.jpg",
  },
  {
    name: "MOON",
    className: "moon",
    image:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia00/pia00405/PIA00405.jpg",
  },
  {
    name: "MARS",
    className: "mars",
    image:
      "https://assets.science.nasa.gov/dynamicimage/assets/science/psd/photojournal/pia/pia02/pia02981/PIA02981.jpg",
  },
];

export default function Home() {
  return (
    <main className="landing">
      <div className="space-background">
        <div className="star-layer star-layer-one" />
        <div className="star-layer star-layer-two" />
        <div className="star-layer star-layer-three" />

        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />

        {planets.map((planet) => (
          <div
            className={`planet ${planet.className}`}
            key={planet.name}
          >
            <img src={planet.image} alt={planet.name} />
            <span>{planet.name}</span>
          </div>
        ))}

        <div className="rocket-track">
          <img
            src="/rocket.png"
            alt="Space rocket"
            className="rocket"
          />
          <div className="rocket-glow" />
        </div>
      </div>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-label">
            <span className="label-line" />
            A NASA SPACE APPS STORY
          </div>

          <p className="hero-brand">NOVOSRITI PRESENTS</p>

          <h1>
            BUILT FOR
            <br />
            <span>A QUESTION.</span>
          </h1>

          <p className="hero-description">
            A journey through the machines NASA left behind.
            <br />
            Their missions ended. Their stories didn't.
          </p>

          <div className="hero-buttons">
            <a href="/prologue" className="primary-button">
              BEGIN JOURNEY
              <span>→</span>
            </a>

            <a href="/chapters" className="secondary-button">
              EXPLORE THE STORY
            </a>
          </div>

          <div className="hero-bottom-info">
            <span>01 — 06</span>
            <span className="info-line" />
            <span>THE JOURNEY CONTINUES</span>
          </div>
        </div>

        <div className="journey-indicator">
          <span className="journey-dot" />
          <span>EARTH</span>
          <span className="journey-connector" />
          <span>MOON</span>
          <span className="journey-connector" />
          <span>MARS</span>
        </div>
      </section>

      <footer className="landing-footer">
        <span>© NOVOSRITI 2026</span>
        <span>INSPIRED BY NASA MISSIONS</span>
        <span>BUILT FOR A QUESTION</span>
      </footer>
    </main>
  );
}