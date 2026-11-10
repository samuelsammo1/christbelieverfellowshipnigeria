import { createFileRoute } from "@tanstack/react-router";

import { ConferenceHeader } from "../components/conference-header";
import { ConferenceFooter } from "../components/conference-footer";
import churchHero from "../assets/church-hero.jpg";
import "../conference.css";

const ZOOM_URL = "https://us06web.zoom.us/j/81170870077?pwd=k9QW5lh0E98blxKkqm7nIDmU0ujjos.1";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Watch Live — Christ Believers Fellowship Nigeria" },
      { name: "description", content: "Join the Christ Believers Fellowship Nigeria service live on Zoom." },
      { property: "og:title", content: "Watch Live — Christ Believers Fellowship Nigeria" },
      { property: "og:description", content: "Join our church service live on Zoom." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LivePage,
});

function LivePage() {
  return (
    <div className="conf">
      <ConferenceHeader />
      <main>
        <section className="page-hero">
          <div className="hero-bg" style={{ backgroundImage: `url(${churchHero})` }} aria-hidden="true" />
          <div className="hero-veil" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow reveal d1">Online Service</div>
            <h1>Watch Live</h1>
            <p className="reveal d3">Join our service live on Zoom.</p>
          </div>
        </section>
        <section>
          <div className="container live-layout">
            <div className="live-card">
              <h2>Join on Zoom</h2>
              <p className="live-status">
                Click the button below to join the service in the Zoom app or in your browser.
              </p>
              <a className="btn btn-gold" href={ZOOM_URL} target="_blank" rel="noopener noreferrer">
                Join on Zoom
              </a>
            </div>
            <aside className="live-info">
              <h2>How to join</h2>
              <ol>
                <li>Press <strong>Join on Zoom</strong>.</li>
                <li>Open the Zoom app when asked, or choose to join from your browser.</li>
                <li>The host must start the meeting and admit participants. Until then you'll wait to be let in.</li>
                <li>If the link doesn't work, open Zoom and enter the Meeting ID and Passcode below.</li>
              </ol>
              <div className="donate-details">
                <div><span>Meeting ID</span><strong>811 7087 0077</strong></div>
                <div><span>Passcode</span><strong>811</strong></div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <ConferenceFooter />
    </div>
  );
}
