import { createFileRoute, Link } from "@tanstack/react-router";

import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";
import "../conference.css";
import { ConferenceFooter } from "../components/conference-footer";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Speakers — CBF Conference 2026" },
      {
        name: "description",
        content:
          "Meet the Bible study speakers, symposium speakers and session chairmen for the Christ Believers Fellowship Conference 2026 in Ugheli, Delta State.",
      },
      { property: "og:title", content: "Speakers — CBF Conference 2026" },
      {
        property: "og:description",
        content: "Meet the speakers and session leaders for CBF Conference 2026 in Ugheli, Delta State.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SpeakersPage,
});

type Person = {
  name: string;
  when: string;
  title?: string;
  reference?: string;
  detail?: string;
};

/* All names, titles, scriptures and times are taken from the official conference programme. */
const bibleStudies: Person[] = [
  {
    name: "Bro. Monday Udo",
    when: "Saturday · 10:35 am",
    title: "Humanity’s Original Destiny",
    reference: "Genesis 1:26–31; Psalm 8:4–9",
  },
  {
    name: "Bro. Emmanuel Jackson",
    when: "Saturday · 11:45 am",
    title: "The Tragedy: How Humanity Lost Life",
    reference: "Genesis 2:16–17; 3:1–24; Romans 5:12",
  },
  {
    name: "Bro. Bruce Blake",
    when: "Saturday · 12:20 pm",
    title: "Why a Ransom Was Necessary",
    reference: "Psalm 49:6–9; Romans 3:23–26",
  },
  {
    name: "Bro. Godwin Edoja",
    when: "Saturday · 12:50 pm",
    title: "Jesus: The Man Who Gave His Life",
    reference: "Matthew 20:28; John 10:17–18",
  },
  {
    name: "Bro. Percival Blenman",
    when: "Saturday · 2:05 pm",
    title: "The Ransom – What Jesus Accomplished",
    reference: "Hebrews 7:27",
  },
  {
    name: "Bro. Jim Sochacki (USA)",
    when: "Saturday · 2:40 pm",
    title: "Humanity Today: Dangers Facing Our World",
    reference: "Matthew 24:4–14; 2 Timothy 3:1–5; Luke 21:25–26",
  },
  {
    name: "Bro. Gordon Coulson",
    when: "Saturday · 3:20 pm",
    title: "The Resurrection",
  },
  {
    name: "Bro. Anosike Onyenwe",
    when: "Sunday · 10:15 am",
    title: "The Return and Kingdom of Christ",
    reference: "Daniel 2:44; Psalm 2:6–12; Revelation 11:15",
  },
  {
    name: "Bro. Sunday Enang",
    when: "Sunday · 10:50 am",
    title: "The Kingdom’s Work of Restoration",
    reference: "Isaiah 35:1–10; Isaiah 65:17–25; Revelation 21:1–5",
  },
  {
    name: "Bro. Michael Walter",
    when: "Sunday · 11:20 am",
    title: "The Ransom’s Final Triumph: Humanity Reconciled to God",
    reference: "1 Corinthians 15:20–28; Revelation 21:3–4; 22:3–5",
  },
];

const symposium: Person[] = [
  {
    name: "Bro. Paul Teshoma",
    when: "Part 1 · Saturday · 11:10 am",
    title: "The Need and Promise of Restoration",
    reference: "Acts 3:19–21",
  },
  {
    name: "Bro. Owo Okon & Bro. Dennis Peter",
    when: "Part 2 · Saturday · 11:25 am",
    title: "The Ransom and the Accomplishment of Restoration",
    reference: "Acts 3:19–21; Matthew 20:28",
  },
];

const leaders: Person[] = [
  {
    name: "Bro. Gideon Jimmy Amah",
    when: "Chairman · Saturday morning",
    detail: "Also chairs the Panel Discussion and gives the announcements and closing remarks on Sunday.",
  },
  {
    name: "Bro. Owo Okon",
    when: "Chairman · Saturday afternoon",
  },
  {
    name: "Bro. Daniel Jimmy",
    when: "Chairman · Sunday morning",
  },
  {
    name: "Bro. Paul Teshoma",
    when: "Welcome address · Saturday",
    detail: "Also assigns rooms and addresses to the brethren on arrival.",
  },
  {
    name: "Bro. Monye Piue",
    when: "Word of Encouragement · Sunday",
  },
  {
    name: "Sis. Christy Jimmy Amah",
    when: "Worship session",
    detail: "Leading the worship session as the conference gathers around Christ’s finished work.",
  },
];

function initials(name: string) {
  return name
    .replace(/\(.*?\)/g, "")
    .replace(/^(Bro|Sis)\.\s*/, "")
    .split("&")[0]
    ?.trim()
    .split(/\s+/)
    .filter((part) => part.length > 0)
    .map((part) => part.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

function PersonCard({ person }: { person: Person }) {
  return (
    <li className="speaker-card">
      <div className="speaker-avatar" aria-hidden="true">
        {initials(person.name)}
      </div>
      <div>
        <div className="eyebrow">{person.when}</div>
        <h3>{person.name}</h3>
        {person.title && <p className="speaker-topic">{person.title}</p>}
        {person.reference && <p className="speaker-ref">{person.reference}</p>}
        {person.detail && <p>{person.detail}</p>}
      </div>
    </li>
  );
}

function SpeakersPage() {
  return (
    <div className="conf">
      <ConferenceHeader />
      <main id="main">
        <section className="page-hero speakers-hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow reveal d1">Conference voices</div>
            <h1>Meet the Conference Speakers</h1>
            <p className="reveal d3">
              Brothers and sisters serving through worship, teaching, session leadership and
              open discussion around this year’s theme: The Ransom, Restoration of Humanity.
            </p>
          </div>
        </section>

        <section aria-labelledby="bible-study-speakers">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Teaching</div>
              <h2 id="bible-study-speakers">Bible Study Speakers</h2>
              <p>Ten Bible studies across Saturday and Sunday. Times are Nigeria time (WAT).</p>
            </div>

            <ul className="speaker-grid">
              {bibleStudies.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </ul>
          </div>
        </section>

        <section className="speaker-section-alt" aria-labelledby="symposium-speakers">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Saturday morning</div>
              <h2 id="symposium-speakers">Restoration Symposium</h2>
            </div>

            <ul className="speaker-grid">
              {symposium.map((person) => (
                <PersonCard key={person.name} person={person} />
              ))}
            </ul>

            <p className="speaker-note">
              The Panel Discussion on Saturday afternoon brings five panelists together —{" "}
              <Link to="/" hash="panel">
                see the panelists and questions
              </Link>
              .
            </p>
          </div>
        </section>

        <section aria-labelledby="session-leaders">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Serving the gathering</div>
              <h2 id="session-leaders">Session Chairmen &amp; Conference Team</h2>
            </div>

            <ul className="speaker-grid">
              {leaders.map((person) => (
                <PersonCard key={`${person.name}-${person.when}`} person={person} />
              ))}
            </ul>

            <div className="announcement-band">
              <div>
                <div className="eyebrow">13–15 November 2026 · Ugheli, Delta State</div>
                <h2>Join us for Conference 2026</h2>
                <p>
                  Registration is free. Prefer to follow online?{" "}
                  <Link to="/live">Watch live on Zoom</Link>.
                </p>
              </div>
              <a className="btn btn-gold" href={REGISTER_URL} target="_blank" rel="noopener noreferrer">
                Register to attend
              </a>
            </div>
          </div>
        </section>
      </main>
      <ConferenceFooter />
    </div>
  );
}
