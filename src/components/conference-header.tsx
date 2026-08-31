import { Link } from "@tanstack/react-router";
import { useState } from "react";

import logo from "../assets/cbf-logo.jpeg.asset.json";

const conferenceLinks = [
  ["Theme", "/#theme"],
  ["Countdown", "/#countdown"],
  ["Programme", "/#programme"],
  ["Panel", "/#panel"],
  ["Location", "/#location"],
] as const;

export function ConferenceHeader() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header>
      <div className="container">
        <nav>
          <Link className="brand" to="/" onClick={close}>
            <img src={logo.url} alt="Christ Believers Fellowship logo" className="brand-logo" />
            <span className="brand-text">
              Christ Believers Fellowship
              <span>in conjunction with Free Bible Students</span>
            </span>
          </Link>

          <button
            className="menu"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            ☰
          </button>

          <div className={`nav-links${open ? " show" : ""}`}>
            {conferenceLinks.map(([label, to]) => (
              <a key={label} href={to} onClick={close}>
                {label}
              </a>
            ))}
            <Link to="/speakers" onClick={close}>
              Speakers
            </Link>
            <Link to="/register" className="btn btn-gold" onClick={close}>
              Register
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}