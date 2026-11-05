"use client";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Orbit,
} from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-section">
          <Link href="/" className="footer-brand">
            <span className="footer-brand-icon">
              <Orbit size={27} />
            </span>

            <span>
              Novo<span>Sriti</span>
            </span>
          </Link>

          <p>
            Every forgotten machine has a story.
            Every discovery leaves a legacy.
          </p>

          <div className="footer-project-label">
            AN INTERACTIVE SPACE STORYTELLING EXPERIENCE
          </div>
        </div>

        <div className="footer-column">
          <h4>EXPLORE</h4>
          <Link href="/">Home</Link>
          <Link href="/prologue">Prologue</Link>
          <Link href="/chapters">Chapters</Link>
          <Link href="/missions">Mission Game</Link>
          <Link href="/project-summary">Overview</Link>
        </div>

        <div className="footer-column">
          <h4>DISCOVER</h4>
          <span>The Moon</span>
          <span>Mars</span>
          <span>Space Exploration</span>
          <span>Forgotten Machines</span>
        </div>

        <div className="footer-message">
          <span className="footer-eyebrow">THE JOURNEY CONTINUES</span>
          <h3>
            Missions may end.
            <br />
            Stories never do.
          </h3>

          <Link href="/chapters" className="footer-explore-link">
            Explore the journey
            <ArrowUpRight size={16} />
          </Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 NovoSriti. An educational space experience.</span>

        <span className="footer-bottom-center">
          BUILT FOR CURIOUS MINDS
        </span>

        <button
          className="footer-top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          type="button"
        >
          Back to top
          <ArrowUp size={14} />
        </button>
      </div>
    </footer>
  );
}
