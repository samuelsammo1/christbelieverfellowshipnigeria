import { createFileRoute } from "@tanstack/react-router";

import { ConferenceHeader } from "../components/conference-header";
import "../conference.css";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — CBF Conference 2026" },
      {
        name: "description",
        content:
          "Meet the conference leaders and moderators for the Christ Believers Fellowship Conference 2026 in Ugehli, Delta State.",
      },
      { property: "og:title", content: "Speakers — CBF Conference 2026" },
      {
        property: "og:description",
        content: "Meet the conference leaders and moderators gathering in Ugehli for CBF Conference 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpeakersPage,
});

const speakers = [
  {
    name: "Bro. Paul Teshoma",
    role: "Welcome address & panel moderator",
    detail: "Helping guide the gathering and facilitate the conversation on the ransom of Christ.",
    initials: "PT",
  },
  {
    name: "Bro. Emmanuel Jackson",
    role: "Afternoon chairman & panel moderator",
    detail: "Serving the Saturday afternoon session and joining the panel discussion.",
    initials: "EJ",
  },
  {
    name: "Bro. Gideon Jimmy Amah",
    role: "Morning chairman & panel moderator",
    detail: "Serving the Saturday morning session and joining the panel discussion.",
    initials: "GA",
  },
  {
    name: "Sis. Christy Jimmy Amah",
    role: "Worship session",
    detail: "Leading the worship session as the conference gathers around Christ’s finished work.",
    initials: "CA",
  },
];

function SpeakersPage() {
  return (
    <div className="conf">
      <ConferenceHeader />
      <main>
        <section className="page-hero speakers-hero">
          <div className="container">
            <div className="eyebrow">Conference voices</div>
            <h1>Meet the Conference Team</h1>
            <p>
              Brothers and sisters serving through worship, teaching, session leadership and
              open discussion around this year’s theme: The Ransom That Restored Humanity.
            </p>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Serving the gathering</div>
              <h2>Conference leaders and moderators</h2>
              <p>
                These confirmed servants will help lead the programme. Sermon speakers will be
                added here as soon as they are confirmed.
              </p>
            </div>

            <div className="speaker-grid">
              {speakers.map((speaker) => (
                <article className="speaker-card" key={speaker.name}>
                  <div className="speaker-avatar" aria-hidden="true">{speaker.initials}</div>
                  <div>
                    <div className="eyebrow">{speaker.role}</div>
                    <h3>{speaker.name}</h3>
                    <p>{speaker.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="announcement-band">
              <div>
                <div className="eyebrow">Coming soon</div>
                <h2>Sermon speakers to be announced</h2>
                <p>The opening sermon and sermon session speakers will be published here once confirmed.</p>
              </div>
              <a
                className="btn btn-gold"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register to attend
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <strong>Christ Believers Fellowship Conference 2026</strong>
          <p className="small">The Ransom That Restored Humanity • Ugehli, Delta State, Nigeria</p>
        </div>
      </footer>
    </div>
  );
}