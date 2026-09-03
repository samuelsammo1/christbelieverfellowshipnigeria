import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import "../conference.css";
import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Christ Believers Fellowship Conference 2026" },
      {
        name: "description",
        content:
          "The Ransom That Restored Humanity — Christ Believers Fellowship Conference, 13–14 November 2026, Ugehli, Delta State, Nigeria.",
      },
      { property: "og:title", content: "Christ Believers Fellowship Conference 2026" },
      {
        property: "og:description",
        content:
          "Join us 13–14 November 2026 in Ugehli, Delta State for worship, teaching and fellowship.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

// 13 November 2026, 4:30 PM Nigeria time (UTC+1)
const CONFERENCE_TS = Date.UTC(2026, 10, 13, 15, 30, 0);

function useCountdown() {
  // Seeded on first render (server and client) so the boxes never flash zeros.
  const [left, setLeft] = useState(() => Math.max(0, CONFERENCE_TS - Date.now()));

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, CONFERENCE_TS - Date.now()));
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


const pad = (n: number) => String(n).padStart(2, "0");

type Row = [string, string, string];

const friday: Row[] = [
  ["4:30 PM – 6:00 PM", "Arrival of Brothers", "—"],
  ["6:00 PM – 7:30 PM", "Supper", "—"],
  ["Evening", "Assigning of Rooms", "Bro. Paul Teshoma"],
];

const saturdayAM: Row[] = [
  ["7:30 – 8:50 AM", "Breakfast", "—"],
  ["8:50 – 9:30 AM", "Arrival of Brothers at Conference Hall", "—"],
  ["9:30 – 10:00 AM", "Worship Service (Devotion)", "—"],
  ["10:00 – 10:15 AM", "Opening Hymn/Song", "Bro. Daniel Jimmy Amah"],
  ["10:15 – 10:20 AM", "Opening Prayer", "To Be Announced"],
  ["10:20 – 10:30 AM", "Welcome Address", "Bro. Paul Teshoma"],
  ["10:30 – 10:40 AM", "Hymn/Prayer", "Bro. Emmanuel Jackson"],
  ["10:40 – 10:45 AM", "Worship Session", "Sis. Christy Jimmy Amah"],
  ["10:45 – 10:50 AM", "Hymn/Prayer", "To Be Announced"],
  ["10:50 – 11:30 AM", "Opening Sermon", "To Be Announced"],
  ["11:30 – 11:35 AM", "Hymn/Prayer", "To Be Announced"],
  ["11:35 – 11:45 AM", "Intermission", "—"],
  ["11:45 AM – 12:00 PM", "Words of Encouragement", "Bro. Monye Pius"],
  ["12:00 – 12:45 PM", "Sermon", "To Be Announced"],
  ["12:45 – 1:00 PM", "Hymn/Prayer", "To Be Announced"],
  ["1:00 – 2:00 PM", "Lunch", "—"],
];

const saturdayPM: Row[] = [
  ["2:00 – 2:10 PM", "Hymn/Prayer", "Bro. Gideon Jimmy Amah"],
  ["2:10 – 2:40 PM", "Sermon", "To Be Announced"],
  ["2:40 – 2:55 PM", "Hymn and Prayer", "To Be Announced"],
  ["2:55 – 3:00 PM", "Intermission", "—"],
  ["3:00 – 3:10 PM", "Hymn and Prayer", "Bro. Paul Teshoma"],
];

function ScheduleTable({ rows }: { rows: Row[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Programme</th>
          <th>Responsible</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r) => (
          <tr key={r[0] + r[1]}>
            <td>{r[0]}</td>
            <td>{r[1]}</td>
            <td>{r[2]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Index() {
  const { days, hours, minutes, seconds, started } = useCountdown();

  return (
    <div className="conf">
      <ConferenceHeader />

      <main id="home">
        <section className="hero">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow reveal d1">Present November 2026 Annual Conference</div>
            <h1>The Ransom That Restored Humanity</h1>
            <p className="reveal d3">
              Come and join us as we lift a triumphant shout to the Lord — to learn,
              fellowship, worship and grow together in Christ.
            </p>
            <div className="date reveal d4">
              13–14 November 2026 &nbsp; • &nbsp; Ugehli, Delta State, Nigeria
            </div>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfBIlAqVXfAYd3GgAHROVsZxV8F_3MTQlPcGmvQQInY5cRWKg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold reveal d5"
            >
              Register for the Conference
            </a>
            <a href="#programme" className="btn btn-outline reveal d5">
              View Programme
            </a>
          </div>
        </section>

        <section id="theme">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Conference Theme</div>
              <h2>The Ransom That Restored Humanity</h2>
              <p>
                A time of worship, biblical teaching, fellowship and spiritual growth
                centered on the sacrifice of Jesus Christ.
              </p>
            </div>

            <div className="theme-grid">
              <div className="theme-card">
                <h3>Key Message</h3>
                <p className="theme-quote">
                  “For even the Son of Man came not to be ministered unto, but to
                  minister, and to give His life a ransom for many.”
                </p>
                <strong>Mark 10:45</strong>
                <br />
                <br />
                <p>
                  Christ gave Himself as the ransom for humanity. Through His sacrifice,
                  we are called to understand the depth of God's love and live transformed
                  lives that reflect Christ.
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
                    He was wounded for our transgressions and bruised for our iniquities.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="countdown" id="countdown">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Save the Date</div>
              <h2>{started ? "The Conference Has Begun" : "Conference Countdown"}</h2>
              <p>We look forward to welcoming you to Ugehli, Delta State.</p>
            </div>

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
          </div>
        </section>

        <section>
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Why We Gather</div>
              <h2>Conference Objective</h2>
            </div>
            <div className="objective">
              <p>
                The conference is designed to help believers understand the sacrifice of
                Jesus Christ as the ransom for humanity and to encourage us to live lives
                that reflect the transformation we have received through Christ.
              </p>
            </div>
          </div>
        </section>

        <section id="programme">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">Conference Schedule</div>
              <h2>Programme of Events</h2>
              <p>
                Join us throughout the conference for worship, teaching, fellowship and
                discussion.
              </p>
            </div>

            <div className="programme-wrap">
              <div className="programme-card">
                <h3>Friday, 13 November 2026</h3>
                <h4>Arrival &amp; Accommodation</h4>
                <ScheduleTable rows={friday} />
              </div>

              <div className="programme-card">
                <h3>Saturday, 14 November 2026</h3>
                <h4>Morning Session — AM Chairman: Bro. Gideon Jimmy Amah</h4>
                <ScheduleTable rows={saturdayAM} />
              </div>

              <div className="programme-card">
                <h3>Saturday Afternoon Session</h3>
                <h4>PM Chairman: Bro. Emmanuel Jackson</h4>
                <ScheduleTable rows={saturdayPM} />
              </div>

              <div className="panel" id="panel">
                <div className="section-title">
                  <div className="eyebrow">3:10 PM – 4:00 PM</div>
                  <h2>Panel Discussion</h2>
                  <p>
                    An open session where brothers and sisters reflect together on the
                    ransom of Christ and its meaning for daily living.
                  </p>
                </div>

                <div className="panel-grid">
                  <div>
                    <h3>Moderators</h3>
                    <ul>
                      <li>Bro. Paul Teshoma</li>
                      <li>Bro. Emmanuel Jackson</li>
                      <li>Bro. Gideon Jimmy Amah</li>
                    </ul>
                  </div>

                  <div className="questions">
                    <div className="question">
                      What does it mean that Christ gave His life as a ransom for many?
                    </div>
                    <div className="question">
                      How should the ransom of Christ shape the way we live daily?
                    </div>
                    <div className="question">
                      In what practical ways can we share this message with others?
                    </div>
                    <div className="question">
                      How do we keep growing in fellowship after the conference?
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
                <p>13–14 November 2026</p>
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

        <section className="cta">
          <div className="container">
            <h2>Be Part of Conference 2026</h2>
            <p>
              Register today and join believers gathering to worship, learn and grow
              together in Christ.
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

      <footer>
        <div className="container">
          <strong>Christ Believers Fellowship Conference 2026</strong>
          <p className="small">
            The Ransom That Restored Humanity • Ugehli, Delta State, Nigeria
          </p>
          <p className="small footer-legal">
            <a href="/privacy">Privacy Policy &amp; Terms of Use</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
