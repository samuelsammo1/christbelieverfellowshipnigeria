import { Link } from "@tanstack/react-router";
import { useState } from "react";

import logo from "../assets/cbf-logo.jpeg.asset.json";

const conferenceLinks = [
  ["Theme", "/#theme"],
  ["Countdown", "/#countdown"],
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
              Christ Believers Fellowship Nigeria
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
            <Link to="/donate" onClick={close}>
              Donate
            </Link>
             <Link to="/programme" onClick={close}>
              Programme
            </Link>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
              onClick={close}
            >
              Register
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}