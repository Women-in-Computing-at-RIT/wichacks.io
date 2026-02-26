import { useRef, useState } from "react";
import { Instagram, Menu, X } from "lucide-react";
import "./style/style.css";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Schedule from "./pages/Schedule";
import FAQ from "./pages/FAQ";
import Team from "./pages/Team";
import Sponsors from "./pages/Sponsors";

import mlh_badge from "./assets/mlh-trust-badge-2026-white.svg";

export default function App() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    const navH = navRef.current?.getBoundingClientRect().height ?? 0;
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - navH;
    window.scrollTo({ top: y, behavior: "smooth" });
    setMenuOpen(false); // close menu after click
  };

  return (
    <>
      <nav ref={navRef} className={`navbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="nav-inner">
          <div className="nav-left">
            <button
              className="nav-toggle"
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            <ul className="nav-links">
              <li><a href="#about" onClick={scrollToSection("about")}>About</a></li>
              <li><a href="#categories" onClick={scrollToSection("categories")}>Categories</a></li>
              <li><a href="#schedule" onClick={scrollToSection("schedule")}>Schedule</a></li>
              <li><a href="#faq" onClick={scrollToSection("faq")}>FAQ</a></li>
              <li><a href="#team" onClick={scrollToSection("team")}>Team</a></li>
              <li><a href="#sponsors" onClick={scrollToSection("sponsors")}>Sponsors</a></li>
            </ul>
          </div>

          <div className="nav-icons">
            <a
              id="instagram-nav-item"
              className="nav-icon"
              href="https://www.instagram.com/wichacks/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WiCHacks Instagram"
            >
              <Instagram size={32} />
            </a>
            <a
              className="mlh-banner"
              href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Major League Hacking site"
            >
              <img src={mlh_badge} alt="Major League Hacking 2026 Hackathon Season" />
            </a>
          </div>
        </div>
      </nav>

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="categories"><Categories /></section>
      <section id="schedule"><Schedule /></section>
      <section id="faq"><FAQ /></section>
      <section id="team"><Team /></section>
      <section id="sponsors"><Sponsors /></section>
    </>
  );
}
