import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import "../conference.css";
import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";
import cbfLogo from "../assets/cbf-logo.jpeg";
import { ConferenceFooter } from "../components/conference-footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Christ Believers Fellowship Conference 2026",
      },
      {
        name: "description",
        content:
          "The Ransom That Will Restore Humanity — Christ Believers Fellowship Conference, 13–15 November 2026, Ugehli, Delta State, Nigeria.",
      },
      {
        property: "og:title",
        content: "Christ Believers Fellowship Conference 2026",
      },
      {
        property: "og:description",
        content:
          "Join us 13–15 November 2026 in Ugehli, Delta State for worship, teaching and fellowship.",
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
 * Conference begins:
 * 13 November 2026, 4:30 PM Nigeria time (UTC+1)
 */
const CONFERENCE_TS = Date.UTC(2026, 10, 13, 15, 30, 0);

function useCountdown() {
  const [left, setLeft] = useState(() =>
    Math.max(0, CONFERENCE_TS - Date.now())
  );

  useEffect(() => {
    const tick = () => {
      setLeft(Math.max(0, CONFERENCE_TS - Date.now()));
    };

    tick();

    const id = setInterval(tick, 1000);

    return () => clearInterval(id);
  }, []);

  return {
    days: Math.floor(left / 86400000),
    hours: Math.floor(left / 3600000) % 24,
    minutes: Math.floor(left / 60000) % 60,
    seconds: Math.floor(left / 1000) % 60,
    started: left <= 0,
  };
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function Index() {
  const { days, hours, minutes, seconds, started } = useCountdown();

  return (
    <div className="conf">
      <ConferenceHeader />

      <main id="home">
        {/* =====================================================
            HERO
        ===================================================== */}
        <section className="hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />

          <div className="hero-veil" aria-hidden="true" />

          <div className="container">
            <div className="eyebrow reveal d1">
              2026 Annual Conference
            </div>

            <h1>The Ransom That Restored Humanity</h1>

            <p className="reveal d3">
              Come and join us as we gather to learn, worship, fellowship and
              grow together in Christ.
            </p>

            <div className="date reveal d4">
              13–15 November 2026
              <span aria-hidden="true"> &nbsp; • &nbsp; </span>
              Ugehli, Delta State, Nigeria
            </div>

            <div className="hero-actions reveal d5">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                Register for the Conference
              </a>

              <a href="/programme" className="btn btn-outline">
                Explore Programme
              </a>
            </div>
          </div>
        </section>

        {/* =====================================================
            THEME
        ===================================================== */}
        <section id="theme">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Conference Theme</div>

              <h2>
                The Ransom That Will Restore Humanity
              </h2>

              <p className="theme-reference">
                1 Timothy 2:5–6
              </p>

              <p>
                A time of worship, biblical teaching, fellowship and spiritual
                growth centered on the sacrifice of Jesus Christ.
              </p>
            </div>

            <div className="theme-grid">
              <div className="theme-card">
                <h3>Key Message</h3>

                <p className="theme-quote">
                  “For even the Son of Man came not to be ministered unto, but
                  to minister, and to give His life a ransom for many.”
                </p>

                <strong>Mark 10:45</strong>

                <br />
                <br />

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

              <h2>
                {started
                  ? "The Conference Has Begun"
                  : "Conference Countdown"}
              </h2>

              <p>
                We look forward to welcoming you to Ugehli, Delta State.
              </p>
            </div>

            <div className="timer">
              <div className="time-box">
                <strong suppressHydrationWarning>
                  {days}
                </strong>
                <span>Days</span>
              </div>

              <div className="time-box">
                <strong suppressHydrationWarning>
                  {pad(hours)}
                </strong>
                <span>Hours</span>
              </div>

              <div className="time-box">
                <strong suppressHydrationWarning>
                  {pad(minutes)}
                </strong>
                <span>Minutes</span>
              </div>

              <div className="time-box">
                <strong suppressHydrationWarning>
                  {pad(seconds)}
                </strong>
                <span>Seconds</span>
              </div>
            </div>
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
        <section>
          <div className="container">
            <div className="panel" id="panel">
              <div className="panel-header">
                <div className="eyebrow">Featured Session</div>

                <h2>Panel Discussion</h2>

                <p>
                  An open session where brothers and sisters reflect together
                  on the ransom of Christ and its meaning for daily living.
                </p>
              </div>

              <div className="panel-grid">
                {/* Moderators */}
                <div className="moderators">
                  <div className="panel-heading">
                    <span>01</span>

                    <div>
                      <div className="eyebrow">Participants</div>
                      <h3>Moderators</h3>
                    </div>
                  </div>

                  <div className="moderator-list">
                    <div className="moderator">
                      <span>01</span>
                      <strong>Bro. Emmanuel Jackson</strong>
                    </div>

                    <div className="moderator">
                      <span>02</span>
                      <strong>Sis. Merit Paul / Bro. Owo Okon</strong>
                    </div>

                    <div className="moderator">
                      <span>03</span>
                      <strong>Bro. Daniel Jimmy Amah</strong>
                    </div>

                    <div className="moderator">
                      <span>04</span>
                      <strong>Bro. Dennis Peter</strong>
                    </div>

                    <div className="moderator">
                      <span>05</span>
                      <strong>Bro. Godwin Edoja</strong>
                    </div>

                    <div className="moderator chairman">
                      <span>06</span>

                      <div>
                        <strong>Bro. Gideon Jimmy</strong>
                        <small>Chairman</small>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Discussion Questions */}
                <div className="questions">
                  <div className="panel-heading">
                    <span>02</span>

                    <div>
                      <div className="eyebrow">Discussion Topics</div>
                      <h3>Questions for Reflection</h3>
                    </div>
                  </div>

                  <div className="question">
                    <span>01</span>

                    <p>
                      What do we understand by godly character and how is it
                      different from simply being a "good person" according to
                      society’s standards?
                    </p>
                  </div>

                  <div className="question">
                    <span>02</span>

                    <p>
                      What are some of the major influences in today’s
                      generation that make it difficult for young people to
                      maintain godly character?
                    </p>
                  </div>

                  <div className="question">
                    <span>03</span>

                    <p>
                      Philippians 2:15 speaks about believers shining as
                      lights in the world. How can our everyday conduct make
                      us a light to others?
                    </p>
                  </div>

                  <div className="question">
                    <span>04</span>

                    <p>
                      If you had the opportunity to speak directly to the
                      young people of this generation, what one character
                      quality would you encourage them to develop, and why?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            DATE / VENUE / REGISTRATION
        ===================================================== */}
        <section id="location">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Practical Information</div>

              <h2>Date, Venue &amp; Registration</h2>
            </div>

            <div className="info-grid">
              <div className="info-card">
                <div className="icon">🗓️</div>

                <h3>Date</h3>

                <p>13–15 November 2026</p>

                <p>Begins 4:30 PM on Friday</p>
              </div>

              <div className="info-card">
                <div className="icon">📍</div>

                <h3>Venue</h3>

                <p>Ugehli, Delta State</p>

                <p>Nigeria</p>
              </div>

              <div className="info-card">
                <div className="icon">📝</div>

                <h3>Registration</h3>

                <p>Free — kindly register early</p>

                <p>Accommodation provided</p>
              </div>
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

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Register Now
            </a>
          </div>
        </section>
      </main>

      <ConferenceFooter />
    </div>
  );
}