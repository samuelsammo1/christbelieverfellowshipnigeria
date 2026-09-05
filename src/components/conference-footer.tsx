import { Link } from "@tanstack/react-router";
import logo from "../assets/cbf-logo.jpeg.asset.json";

export function ConferenceFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src={logo.url} alt="Christ Believers Fellowship Nigeria logo" />
        </div>

        <div className="footer-info">
          <strong>Christ Believers Fellowship Nigeria</strong>
          <p className="small">
            2026 Annual Conference • Ugehli, Delta State, Nigeria
          </p>
          <p className="small">
            <a href="mailto:fellowshipchristbelievers@gmail.com">
              fellowshipchristbelievers@gmail.com
            </a>
          </p>
          <p className="small">
            <a href="tel:+2349130791737">+234 913 079 1737</a>
            <br />
            <a href="tel:+2348059470833">+234 805 947 0833</a>
          </p>
        </div>

        <div className="footer-legal-col">
          <strong>Legal</strong>
          <Link to="/privacy">Terms of Use</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/donate">Donations</Link>
        </div>

        <div className="footer-whatsapp-col">
          <strong>Join WhatsApp group for more information</strong>
          <a
            href="https://chat.whatsapp.com/LJGUjKWaKlT6qhwVLR0b2s"
            target="_blank"
            rel="noopener noreferrer"
          >
            Africa CDMI online
          </a>
          <a
            href="https://chat.whatsapp.com/GeLksI5lGadLGbFvnTIE1R"
            target="_blank"
            rel="noopener noreferrer"
          >
            Free Bible Students
          </a>
          <a
            href="https://chat.whatsapp.com/DYJTZQpHZ7LH2i2mCWrnOS"
            target="_blank"
            rel="noopener noreferrer"
          >
            Christ Believers Fellowship
          </a>
        </div>
      </div>
    </footer>
  );
}
