import { createFileRoute, Link } from "@tanstack/react-router";
import { CalendarDays, ClipboardCheck, MapPin, Phone, Video } from "lucide-react";
import { useEffect, useState } from "react";

import "../conference.css";
import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";
import { ConferenceFooter } from "../components/conference-footer";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform";
const MAP_URL = "https://www.google.com/maps/search/?api=1&query=No.+2+Teshoma+Street+Oghenevweta+Ughelli+Delta+State+Nigeria";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Christ Believers Fellowship Conference 2026",
      },
      {
        name: "description",
        content:
          "The Ransom, Restoration of Humanity — Christ Believers Fellowship Nigeria Conference, 13–15 November 2026, No. 2 Teshoma Street, Oghenevweta, Ughelli, Delta State, Nigeria.",
      },
      {
        property: "og:title",
        content: "Christ Believers Fellowship Conference 2026",
      },
      {
        property: "og:description",
        content:
          "Join us 13–15 November 2026 in Ughelli, Delta State for worship, teaching and fellowship — in person or on Zoom.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: Index,
});

/*
 * Conference begins 13 November 2026, 4:30 PM Nigeria time (UTC+1)
 * and closes 15 November 2026, 3:00 PM (per the official programme).
 */
const CONFERENCE_TS = Date.UTC(2026, 10, 13, 15, 30, 0);
const CONFERENCE_END_TS = Date.UTC(2026, 10, 15, 14, 0, 0);

function useCountdown() {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const left = Math.max(0, CONFERENCE_TS - now);

  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor(left / 3600000) % 24,
    minutes: Math.floor(left / 60000) % 60,
    seconds: Math.floor(left / 1000) % 60,
    phase: now < CONFERENCE_TS ? "before" : now < CONFERENCE_END_TS ? "during" : "after",
  } as const;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

const panelists = [
  { name: "Bro. Gideon Jimmy", role: "Chairman" },
  { name: "Bro. Sunday Enang" },
  { name: "Bro. Anosike Onyenwe" },
  { name: "Bro. Dennis Peter" },
  { name: "Bro. Monday Udo" },
];

const panelQuestions = [
  { text: "What does “one for all” mean in relation to Christ’s sacrifice?" },
  { text: "Can any human sacrifice add to or replace Christ’s ransom?" },
  {
    text: "If the ransom is complete, what work remains for believers?",
    reference: "Philippians 2:12; James 2:17",
  },
  {
    text: "How can we distinguish between spreading the gospel and simply seeking attention or popularity online?",
  },
];

function Index() {
  const { days, hours, minutes, seconds, phase } = useCountdown();

  return (
    <div className="conf">
      <ConferenceHeader />

      <main id="main">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="hero home-hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />

          <div className="hero-veil" aria-hidden="true" />

          <div className="container">
            <div className="eyebrow reveal d1">Welcome · 2026 Annual Conference</div>

            <h1>The Ransom, Restoration of Humanity</h1>

            <p className="reveal d3">
              Come and join us as we gather to learn, worship, fellowship and
              grow together in Christ.
            </p>

            <div className="date reveal d4">
              13–15 November 2026
              <span aria-hidden="true"> &nbsp; • &nbsp; </span>
              Ughelli, Delta State, Nigeria
            </div>

            <div className="hero-actions reveal d5">
              <a
                href={REGISTER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Register for the Conference
              </a>

              <a href="#visit" className="btn btn-outline">
                Plan Your Visit
              </a>

              <Link to="/live" className="btn btn-outline">
                Watch Live
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================================
            AT A GLANCE
        ===================================================== */}
        <section className="glance" aria-label="Conference at a glance">
          <div className="container">
            <ul className="glance-grid">
              <li className="glance-item">
                <CalendarDays aria-hidden="true" />
                <div>
                  <strong>13–15 November 2026</strong>
                  <span>Begins Friday at 4:30 PM</span>
                </div>
              </li>
              <li className="glance-item">
                <MapPin aria-hidden="true" />
                <div>
                  <strong>No. 2 Teshoma Street</strong>
                  <span>Oghenevweta, Ughelli, Delta State</span>
                </div>
              </li>
              <li className="glance-item">
                <Video aria-hidden="true" />
                <div>
                  <strong>Join online</strong>
                  <span>
                    <Link to="/live">Watch on Zoom</Link>
                  </span>
                </div>
              </li>
              <li className="glance-item">
                <ClipboardCheck aria-hidden="true" />
                <div>
                  <strong>Free registration</strong>
                  <span>
                    <Link to="/programme">See the programme</Link>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* =====================================================
            THEME
        ===================================================== */}
        <section id="theme">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Conference Theme</div>

              <h2>The Ransom, Restoration of Humanity</h2>

              <p>
                A time of worship, biblical teaching, fellowship and spiritual
                growth centered on the sacrifice of Jesus Christ.
              </p>
            </div>

            <blockquote className="theme-verse">
              <p>
                “For there is one God and one mediator between God and mankind,
                the man Christ Jesus, who gave himself as a ransom for all
                people.”
              </p>
              <cite>1 Timothy 2:5–6</cite>
            </blockquote>

            <div className="theme-grid">
              <div className="theme-card">
                <h3>Key Message</h3>

                <p className="theme-quote">
                  “For even the Son of Man came not to be ministered unto, but
                  to minister, and to give His life a ransom for many.”
                </p>

                <strong className="theme-quote-ref">Mark 10:45</strong>

                <p>
                  Christ gave Himself as the ransom for humanity. Through His
                  sacrifice, we are called to understand the depth of God's
                  love and live transformed lives that reflect Christ.
                </p>
              </div>

              <div className="theme-card">
                <h3>Key Scriptures</h3>

                <div className="scriptures">
                  <div className="scripture">
                    <strong>Mark 10:45</strong>
                    Christ gave His life as a ransom for many.
                  </div>

                  <div className="scripture">
                    <strong>1 Timothy 2:5–6</strong>
                    Jesus Christ gave Himself as a ransom for all.
                  </div>

                  <div className="scripture">
                    <strong>Isaiah 53:5</strong>
                    He was wounded for our transgressions and bruised for our
                    iniquities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            COUNTDOWN
        ===================================================== */}
        <section className="countdown" id="countdown">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Save the Date</div>

              <h2 suppressHydrationWarning>
                {phase === "before"
                  ? "Conference Countdown"
                  : phase === "during"
                    ? "The Conference Is Under Way"
                    : "Thank You for Joining Us"}
              </h2>

              <p suppressHydrationWarning>
                {phase === "before"
                  ? "We look forward to welcoming you to Ughelli, Delta State."
                  : phase === "during"
                    ? "Can’t be there in person? Join the sessions online."
                    : "Conference 2026 has ended. God bless you all."}
              </p>
            </div>

            {phase === "before" && (
              <div className="timer">
                <div className="time-box">
                  <strong suppressHydrationWarning>{days}</strong>
                  <span>Days</span>
                </div>

                <div className="time-box">
                  <strong suppressHydrationWarning>{pad(hours)}</strong>
                  <span>Hours</span>
                </div>

                <div className="time-box">
                  <strong suppressHydrationWarning>{pad(minutes)}</strong>
                  <span>Minutes</span>
                </div>

                <div className="time-box">
                  <strong suppressHydrationWarning>{pad(seconds)}</strong>
                  <span>Seconds</span>
                </div>
              </div>
            )}

            {phase === "during" && (
              <div className="countdown-actions">
                <Link to="/live" className="btn btn-gold">
                  Watch Live
                </Link>
                <Link to="/programme" className="btn btn-outline">
                  View the Programme
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* =====================================================
            CONFERENCE OBJECTIVE
        ===================================================== */}
        <section>
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Why We Gather</div>

              <h2>Conference Objective</h2>
            </div>

            <div className="objective">
              <p>
                The conference is designed to help believers understand the
                sacrifice of Jesus Christ as the ransom for humanity and to
                encourage us to live lives that reflect the transformation we
                have received through Christ.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            PANEL DISCUSSION
        ===================================================== */}
        <section className="panel-section">
          <div className="container">
            <div className="panel" id="panel">
              <div className="panel-header">
                <div className="eyebrow">Featured Session · Saturday 14 November, 3:55–4:55 PM</div>

                <h2>Panel Discussion</h2>

                <p>
                  An open session where brothers and sisters reflect together
                  on the ransom of Christ and its meaning for daily living.
                </p>
              </div>

              <div className="panel-grid">
                <div className="moderators">
                  <div className="panel-heading">
                    <span aria-hidden="true">01</span>

                    <div>
                      <div className="eyebrow">Participants</div>
                      <h3>Panelists</h3>
                    </div>
                  </div>

                  <ul className="moderator-list">
                    {panelists.map((panelist, index) => (
                      <li
                        key={panelist.name}
                        className={`moderator${panelist.role ? " chairman" : ""}`}
                      >
                        <span aria-hidden="true">{pad(index + 1)}</span>
                        <div>
                          <strong>{panelist.name}</strong>
                          {panelist.role && <small>{panelist.role}</small>}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="questions">
                  <div className="panel-heading">
                    <span aria-hidden="true">02</span>

                    <div>
                      <div className="eyebrow">Discussion Topics</div>
                      <h3>Questions for Discussion</h3>
                    </div>
                  </div>

                  <ol className="question-list">
                    {panelQuestions.map((question, index) => (
                      <li className="question" key={question.text}>
                        <span aria-hidden="true">{pad(index + 1)}</span>
                        <p>
                          {question.text}
                          {question.reference && (
                            <small className="question-ref">{question.reference}</small>
                          )}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PLAN YOUR VISIT
        ===================================================== */}
        <section id="visit" className="visit">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Plan Your Visit</div>

              <h2>Date, Venue &amp; Registration</h2>

              <p>Everything you need to join us in Ughelli.</p>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <div className="icon" aria-hidden="true">
                  <CalendarDays />
                </div>

                <h3>Date</h3>

                <p>13–15 November 2026</p>

                <p>Begins 4:30 PM on Friday</p>

                <Link to="/programme" className="info-link">
                  View the full programme
                </Link>
              </div>

              <div className="info-card">
                <div className="icon" aria-hidden="true">
                  <MapPin />
                </div>

                <h3>Venue</h3>

                <p>No. 2 Teshoma Street, Oghenevweta</p>

                <p>Ughelli, Delta State, Nigeria</p>

                <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="info-link">
                  Open in Google Maps
                </a>
              </div>

              <div className="info-card">
                <div className="icon" aria-hidden="true">
                  <ClipboardCheck />
                </div>

                <h3>Registration</h3>

                <p>Free — kindly register early</p>

                <p>Accommodation provided</p>

                <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="info-link">
                  Register now
                </a>
              </div>
            </div>

            <div className="visit-help">
              <Phone aria-hidden="true" size={20} />
              <p>
                Questions about travel or accommodation? Call{" "}
                <a href="tel:+2349130791737">+234 913 079 1737</a> or{" "}
                <a href="tel:+2348059470833">+234 805 947 0833</a>.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            FINAL CALL TO ACTION
        ===================================================== */}
        <section className="cta">
          <div className="container">
            <h2>Be Part of Conference 2026</h2>

            <p>
              Register today and join believers gathering to worship, learn
              and grow together in Christ.
            </p>

            <div className="cta-actions">
              <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn">
                Register Now
              </a>
              <Link to="/live" className="btn btn-outline">
                Watch Live
              </Link>
            </div>
          </div>
        </section>
      </main>

      <ConferenceFooter />
    </div>
  );
}
