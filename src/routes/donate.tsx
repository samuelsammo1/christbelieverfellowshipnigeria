import { createFileRoute } from "@tanstack/react-router";

import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";
import "../conference.css";


export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — CBF Conference 2026" },
      {
        name: "description",
        content:
          "Support the Christ Believers Fellowship Conference 2026 in Ugehli, Delta State with a donation.",
      },
      { property: "og:title", content: "Donate — CBF Conference 2026" },
      {
        property: "og:description",
        content: "Give towards the Christ Believers Fellowship Conference 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  return (
    <div className="conf">
      <ConferenceHeader />
      <main>
        <section className="page-hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow reveal d1">Support the Conference</div>
            <h1>Give a Donation</h1>
            <p className="reveal d3">
              Your giving helps us prepare the venue, accommodation and meals for everyone
              gathering in Ugehli on 13–14 November 2026. Thank you for partnering with us.
            </p>
          </div>
        </section>


        <section>
          <div className="container">
            <div className="donate-card">
              <div className="eyebrow">Bank Transfer</div>
              <h2>First Bank</h2>
              <div className="donate-details">
                <div>
                  <span>Account Name</span>
                  <strong>AMAH GIDEON JIMMY</strong>
                </div>
                <div>
                  <span>Account Number</span>
                  <strong>3220773105</strong>
                </div>
                <div>
                  <span>Bank</span>
                  <strong>FIRST BANK</strong>
                </div>
              </div>
              <p className="form-note">
                Kindly include “Conference 2026” in your transfer narration so the team can
                acknowledge your gift.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <strong>Christ Believers Fellowship Conference 2026</strong>
          <p className="small">The Ransom That Restored Humanity • Ugehli, Delta State, Nigeria</p>
          <p className="small footer-legal">
            <a href="/privacy">Privacy Policy &amp; Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
