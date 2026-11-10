import { createFileRoute, ClientOnly } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

import { ConferenceHeader } from "../components/conference-header";
import { ConferenceFooter } from "../components/conference-footer";
import churchHero from "../assets/church-hero.jpg";
import "../conference.css";

const ZoomEmbed = lazy(() => import("../components/zoom-embed").then((m) => ({ default: m.ZoomEmbed })));
const ZOOM_URL = "https://us06web.zoom.us/j/81170870077?pwd=k9QW5lh0E98blxKkqm7nIDmU0ujjos.1";

export const Route = createFileRoute("/live")({
  head: () => ({
    meta: [
      { title: "Watch Live — Christ Believers Fellowship Nigeria" },
      { name: "description", content: "Join the Christ Believers Fellowship Nigeria service live on Zoom, right from this website." },
      { property: "og:title", content: "Watch Live — Christ Believers Fellowship Nigeria" },
      { property: "og:description", content: "Join our church service live through Zoom on the CBF Nigeria website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LivePage,
});

function LivePage() {
  const fallback = <div className="live-card"><p className="live-status">Loading live player…</p></div>;
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
            <p className="reveal d3">Join our service through Zoom directly on this page.</p>
          </div>
        </section>
        <section>
          <div className="container live-layout">
            <ClientOnly fallback={fallback}>
              <Suspense fallback={fallback}>
                <ZoomEmbed fallbackUrl={ZOOM_URL} />
              </Suspense>
            </ClientOnly>
            <aside className="live-info">
              <h2>How to join</h2>
              <ol>
                <li>Type your name and press <strong>Join service</strong>.</li>
                <li>Allow your browser to use your microphone/camera if asked — you can stay muted with video off.</li>
                <li>The host must start the meeting and admit participants. Until then you'll wait to be let in.</li>
                <li>If joining here doesn't work, use <strong>Open in Zoom instead</strong>.</li>
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
