

"use client";

import React, { useEffect } from "react";
import { useAskEngineer } from "@/components/AskEngineerProvider";
import "./project-summary.css";

const chapters = [
  {
    number: "01",
    title: "Apollo Laser Mirrors",
    year: "1969 — 1971",
    place: "THE MOON",
    image: "images/apollo-reflector.jpg",
    description:
      "Astronauts left special mirrors on the Moon. Scientists still use laser beams to measure the distance between Earth and the Moon.",
    fact: "Lunar laser ranging is still used today.",
  },
  {
    number: "02",
    title: "Apollo Seismometers",
    year: "1969 — 1972",
    place: "THE MOON",
    image: "images/apollo-seismometer.jpg",
    description:
      "Apollo instruments listened to the Moon's vibrations and recorded moonquakes, helping scientists understand its hidden interior.",
    fact: "The Moon has its own seismic activity.",
  },
  {
    number: "03",
    title: "Viking Landers",
    year: "1976",
    place: "MARS",
    image: "images/viking-lander.jpg",
    description:
      "Viking 1 became the first successful NASA mission to land and operate on Mars, sending back images and scientific data.",
    fact: "Viking 1 landed on July 20, 1976.",
  },
  {
    number: "04",
    title: "Spirit & Opportunity",
    year: "2004 — 2010 / 2018",
    place: "MARS",
    image:"images/opportunity-rover.jpg",
     
    description:
      "Two robotic explorers travelled across Mars, studying rocks and searching for signs that water once existed there.",
    fact: "Opportunity worked for almost 15 years.",
  },
  {
    number: "05",
    title: "Ingenuity",
    year: "2021 — 2024",
    place: "MARS",
    image: "images/ingenuity.jpg",
    description:
      "A small helicopter made history by performing powered, controlled flights on another planet.",
    fact: "Ingenuity completed 72 flights.",
  },
  {
    number: "06",
    title: "Voyager 1",
    year: "1977 — PRESENT",
    place: "INTERSTELLAR SPACE",
    image: "images/voyager.jpg",
    description:
      "Voyager 1 carries the Golden Record and continues its journey beyond the planets, sending scientific information back to Earth.",
    fact: "It entered interstellar space in 2012.",
  },
];

const prologueSteps = [
  ["01", "THE LAST SIGNAL", "A machine falls silent."],
  ["02", "THE WAIT", "Its signal fades into the distance."],
  ["03", "THE WORD", "Does silence mean abandoned?"],
  ["04", "THE TWIST", "Every machine had a purpose."],
  ["05", "THREE RULES", "Separate facts, ideas and imagination."],
  ["06", "THE FIRST QUESTION", "How far away is the Moon?"],
];

export default function ProjectSummary() {
  const { setActivePage } = useAskEngineer();

  useEffect(() => {
    setActivePage("overview");
  }, [setActivePage]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("summary-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    document.querySelectorAll(".summary-reveal").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="summary-page">
      <div className="summary-stars" />
      <div className="summary-nebula summary-nebula-one" />
      <div className="summary-nebula summary-nebula-two" />

      <div className="summary-topline">
        <span>MISSION COMPLETE / PROJECT ARCHIVE</span>
      </div>

      <section className="summary-hero">
        <div className="summary-orbit orbit-one" />
        <div className="summary-orbit orbit-two" />
        <div className="summary-orbit orbit-three" />

        <div className="summary-sun">
          <div className="summary-sun-core" />
        </div>

        <div className="summary-hero-content">
          <span className="summary-eyebrow">
            THE JOURNEY DOES NOT END HERE
          </span>

          <h1>
            Every machine
            <br />
            leaves a <span>story.</span>
          </h1>

          <p className="summary-hero-description">
            A journey through the forgotten machines of space — and the
            questions they still help us answer.
          </p>

          <div className="summary-hero-meta">
            <span>6 MISSIONS</span>
            <i />
            <span>2 WORLDS</span>
            <i />
            <span>1 CONTINUING JOURNEY</span>
          </div>

          <a href="#project-story" className="summary-scroll">
            EXPLORE THE JOURNEY
            <span className="summary-scroll-line" />
          </a>
        </div>

        <div className="summary-planet summary-planet-moon">
          <div className="summary-moon-surface" />
        </div>

        <div className="summary-planet summary-planet-mars">
          <div className="summary-mars-surface" />
        </div>
      </section>

      <section className="summary-intro summary-reveal" id="project-story">
        <span className="summary-section-index">THE BIG PICTURE / 01</span>
        <h2>
          Space is full of
          <br />
          <span>unfinished stories.</span>
        </h2>
        <p>
          NovoSriti takes young explorers beyond the idea of abandoned
          equipment. Through real NASA missions, scientific discoveries and
          interactive exploration, it reveals how machines left on other
          worlds continue to tell us about our universe.
        </p>
      </section>

      <section className="summary-prologue summary-reveal">
        <div className="summary-section-heading">
          <div>
            <span className="summary-section-index">BEFORE THE MISSIONS / 02</span>
            <h2>The Prologue</h2>
          </div>
          <span className="summary-side-note">THE QUIET</span>
        </div>

        <div className="summary-prologue-layout">
          <div className="summary-prologue-visual">
            <div className="summary-signal-ring signal-ring-one" />
            <div className="summary-signal-ring signal-ring-two" />
            <div className="summary-signal-dot" />
            <div className="summary-signal-beam" />
            <span>NO SIGNAL</span>
          </div>

          <div className="summary-prologue-content">
            <p>
              It begins with a machine going silent. But does silence mean
              something has been forgotten?
            </p>
            <div className="summary-prologue-list">
              {prologueSteps.map(([number, title, description]) => (
                <div className="summary-prologue-item" key={number}>
                  <span>{number}</span>
                  <div>
                    <strong>{title}</strong>
                    <small>{description}</small>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="summary-chapters summary-reveal">
        <div className="summary-section-heading">
          <div>
            <span className="summary-section-index">THE STORY ARCHIVE / 03</span>
            <h2>Six stories. Two worlds.</h2>
          </div>
          <span className="summary-side-note">NASA MISSION HISTORY</span>
        </div>

        <div className="summary-chapter-grid">
          {chapters.map((chapter, index) => (
            <article
              className="summary-chapter-card"
              key={chapter.number}
              style={{ "--card-index": index }}
            >
              <div className="summary-chapter-image">
                <img src={chapter.image} alt={chapter.title} loading="lazy" />
                <span className="summary-chapter-number">
                  {chapter.number}
                </span>
                <span className="summary-image-place">{chapter.place}</span>
              </div>

              <div className="summary-chapter-info">
                <span className="summary-chapter-year">{chapter.year}</span>
                <h3>{chapter.title}</h3>
                <p>{chapter.description}</p>
                <div className="summary-fact">
                  <span>MISSION FACT</span>
                  <strong>{chapter.fact}</strong>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="summary-truth summary-reveal">
        <span className="summary-section-index">HOW TO READ THE STORY / 04</span>
        <h2>Three ways to understand.</h2>
        <p className="summary-truth-intro">
          Every story separates what we know from what we think and imagine.
        </p>

        <div className="summary-truth-grid">
          <div className="summary-truth-card truth-fact">
            <span className="summary-truth-line" />
            <strong>FACT</strong>
            <p>Supported by real evidence and NASA information.</p>
          </div>
          <div className="summary-truth-card truth-inferred">
            <span className="summary-truth-line" />
            <strong>INFERRED</strong>
            <p>A reasonable conclusion drawn from available evidence.</p>
          </div>
          <div className="summary-truth-card truth-imagined">
            <span className="summary-truth-line" />
            <strong>IMAGINED</strong>
            <p>A creative way to explore possibilities, not historical fact.</p>
          </div>
        </div>
      </section>

      <section className="summary-experience summary-reveal">
        <div className="summary-experience-image">
          <img
            src="images/q.jpg"
            alt="NASA Ingenuity helicopter on Mars"
            loading="lazy"
          />
          <div className="summary-experience-glow" />
          <span>EXPLORE / DISCOVER / CONNECT</span>
        </div>

        <div className="summary-experience-copy">
          <span className="summary-section-index">THE EXPERIENCE / 05</span>
          <h2>
            More than a story.
            <br />
            <span>An exploration.</span>
          </h2>
          <p>
            Follow a winding mission route, discover real space technology,
            explore mission environments and uncover the stories behind
            machines that travelled farther than most of us can imagine.
          </p>
          <div className="summary-experience-tags">
            <span>INTERACTIVE JOURNEY</span>
            <span>3D EXPLORATION</span>
            <span>REAL NASA DATA</span>
          </div>
        </div>
      </section>

      <section className="summary-ending summary-reveal">
        <div className="summary-ending-orbit">
          <div className="summary-ending-earth" />
          <div className="summary-ending-moon" />
          <div className="summary-ending-satellite" />
        </div>

        <span className="summary-section-index">END OF THIS JOURNEY / START OF ANOTHER</span>
        <h2>
          The machines may
          <br />
          be silent.
          <br />
          <span>Their stories are not.</span>
        </h2>
        <p>
          Somewhere beyond Earth, their discoveries are still part of our
          search for answers.
        </p>

        <div className="summary-ending-actions">
          <a href="/prologue" className="summary-primary-button">
            EXPLORE AGAIN <span>↗</span>
          </a>
          <a href="/missions" className="summary-secondary-button">
            RETURN TO MISSIONS
          </a>
        </div>

     
      </section>
    </main>
  );
}