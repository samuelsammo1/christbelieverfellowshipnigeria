import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import logo from "../assets/cbf-logo.jpeg.asset.json";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform";

const navLinks = [
  { to: "/", label: "Home", exact: true },
  { to: "/programme", label: "Programme", exact: false },
  { to: "/speakers", label: "Speakers", exact: false },
  { to: "/live", label: "Watch Live", exact: false },
  { to: "/donate", label: "Donate", exact: false },
] as const;

export function ConferenceHeader() {
  const [open, setOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <div className="container">
        <nav ref={navRef} aria-label="Main">
          <Link className="brand" to="/" onClick={close}>
            <img src={logo.url} alt="" className="brand-logo" width={46} height={46} />
            <span className="brand-text">
              Christ Believers Fellowship Nigeria
              <span>in conjunction with Free Bible Students</span>
            </span>
          </Link>

          <button
            ref={menuButton}
            type="button"
            className="menu"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
          >
            {open ? <X aria-hidden="true" size={26} /> : <Menu aria-hidden="true" size={26} />}
          </button>

          <div id="primary-nav" className={`nav-links${open ? " show" : ""}`}>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={link.to === "/live" ? "nav-link live-link" : "nav-link"}
                activeOptions={{ exact: link.exact }}
                onClick={close}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold nav-cta"
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
