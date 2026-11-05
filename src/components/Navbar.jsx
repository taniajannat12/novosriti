
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Prologue", href: "/prologue" },
  { label: "Chapters", href: "/chapters" },
  { label: "Missions", href: "/missions" },
  { label: "Overview", href: "/project-summary" },
];

function NovoSritiLogo() {
  return (
    <span className="brand-symbol" aria-hidden="true">
      <span className="brand-planet" />
      <span className="brand-orbit brand-orbit-one" />
      <span className="brand-orbit brand-orbit-two" />
      <span className="brand-star brand-star-one" />
      <span className="brand-star brand-star-two" />
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="site-navbar">
      <div className="navbar-inner">
        <Link
          href="/"
          className="navbar-brand"
          onClick={() => setMenuOpen(false)}
        >
          <NovoSritiLogo />

          <span className="brand-name">
            Novo<span>Sriti</span>
            <small>ABANDONED, BUT NOT FORGOTTEN</small>
          </span>
        </Link>

        <nav className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`navbar-link ${
                isActive(link.href) ? "active" : ""
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="nav-active-line" />
              )}
            </Link>
          ))}

          <Link
            href="/chapters"
            className="navbar-explore"
            onClick={() => setMenuOpen(false)}
          >
            Explore Journey
            <ArrowUpRight size={15} />
          </Link>
        </nav>

        <button
          className="navbar-menu-btn"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          type="button"
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
