import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";

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

/*
 * Session times come from the conference programme (Nigeria time, WAT = UTC+1).
 * They drive schedule-based messages only — the site cannot tell whether the
 * Zoom meeting has actually started, so it never shows a "live" indicator.
 */
type Session = {
  day: string;
  title: string;
  time: string;
  chair?: string;
  start: number;
  end: number;
};

const wat = (day: number, hour: number, minute: number) => Date.UTC(2026, 10, day, hour - 1, minute);

const sessions: Session[] = [
  {
    day: "Saturday · 14 November",
    title: "Morning Session",
    time: "9:30 am – 1:25 pm",
    chair: "Bro. Gideon Jimmy Amah",
    start: wat(14, 9, 30),
    end: wat(14, 13, 25),
  },
  {
    day: "Saturday · 14 November",
    title: "Afternoon Session",
    time: "2:00 pm – 5:00 pm",
    chair: "Bro. Owo Okon",
    start: wat(14, 14, 0),
    end: wat(14, 17, 0),
  },
  {
    day: "Sunday · 15 November",
    title: "Morning Session",
    time: "9:30 am – 12:10 pm",
    chair: "Bro. Daniel Jimmy",
    start: wat(15, 9, 30),
    end: wat(15, 12, 10),
  },
  {
    day: "Sunday · 15 November",
    title: "Afternoon & Closing Session",
    time: "12:10 pm – 3:00 pm",
    start: wat(15, 12, 10),
    end: wat(15, 15, 0),
  },
];

function useNow() {
  // null during server render so the markup matches on first client render
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const id = setInterval(() => setNow(Date.now()), 30_000);
    return () => clearInterval(id);
  }, []);
  return now;
}

function localRange(session: Session) {
  const fmt = new Intl.DateTimeFormat(undefined, {
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  return `${fmt.format(session.start)} – ${new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(session.end)}`;
}

function scheduleStatus(now: number | null) {
  if (now === null) return null;
  const current = sessions.find((s) => now >= s.start && now < s.end);
  if (current) {
    return {
      currentIndex: sessions.indexOf(current),
      nextIndex: -1,
      heading: `Scheduled now: ${current.day.split(" · ")[0]} ${current.title}`,
      detail: "Per the programme, this session is under way. Press Join on Zoom — if the host hasn't started yet, Zoom will ask you to wait.",
    };
  }
  const next = sessions.find((s) => s.start > now);
  if (next) {
    return {
      currentIndex: -1,
      nextIndex: sessions.indexOf(next),
      heading: `Next session: ${next.day} — ${next.title}`,
      detail: `${next.time} Nigeria time (WAT).`,
    };
  }
  return {
    currentIndex: -1,
    nextIndex: -1,
    heading: "The 2026 conference sessions have ended.",
    detail: "Thank you for joining us.",
  };
}

function LivePage() {
  const now = useNow();
  const status = scheduleStatus(now);

  return (
    <div className="conf">
      <ConferenceHeader />
      <main id="main">
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
              <div className="eyebrow">Online access</div>
              <h2>Join on Zoom</h2>
              <p className="live-lead">
                Click the button below to join the service in the Zoom app or in your browser.
              </p>

              <div className="live-status" role="status">
                <CalendarClock aria-hidden="true" size={20} />
                <div>
                  {status ? (
                    <>
                      <strong>{status.heading}</strong>
                      {status.detail}
                    </>
                  ) : (
                    <strong>Conference sessions: 14–15 November 2026 (Nigeria time)</strong>
                  )}
                </div>
              </div>

              <a className="btn btn-gold live-join" href={ZOOM_URL} target="_blank" rel="noopener noreferrer">
                Join on Zoom
                <ExternalLink aria-hidden="true" size={18} />
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
              <p className="live-note">Opens Zoom in a new tab.</p>

              <div className="meeting-details">
                <div>
                  <span>Meeting ID</span>
                  <strong>811 7087 0077</strong>
                </div>
                <div>
                  <span>Passcode</span>
                  <strong>811</strong>
                </div>
              </div>
            </div>

            <aside className="live-info" aria-labelledby="how-to-join">
              <h2 id="how-to-join">How to join</h2>
              <ol className="live-steps">
                <li>
                  Press <strong>Join on Zoom</strong>.
                </li>
                <li>Open the Zoom app when asked, or choose to join from your browser.</li>
                <li>The host must start the meeting and admit participants. Until then you'll wait to be let in.</li>
                <li>If the link doesn't work, open Zoom and enter the Meeting ID and Passcode.</li>
              </ol>
            </aside>
          </div>
        </section>

        <section className="session-section" aria-labelledby="session-times">
          <div className="container">
            <div className="section-title">
              <div className="eyebrow">From the programme</div>
              <h2 id="session-times">Session Times</h2>
              <p>All times are Nigeria time (WAT, UTC+1).</p>
            </div>

            <div className="session-grid">
              {sessions.map((session, index) => {
                const isCurrent = status?.currentIndex === index;
                const isNext = status?.nextIndex === index;
                return (
                  <article
                    key={`${session.day}-${session.title}`}
                    className={`session-card${isCurrent ? " is-current" : ""}${isNext ? " is-next" : ""}`}
                  >
                    {isCurrent && <span className="session-flag">Scheduled now</span>}
                    {isNext && <span className="session-flag">Up next</span>}
                    <div className="eyebrow">{session.day}</div>
                    <h3>{session.title}</h3>
                    <p className="session-time">{session.time} WAT</p>
                    {now !== null && <p className="session-local">Your time: {localRange(session)}</p>}
                    {session.chair && <p className="session-chair">Chairman: {session.chair}</p>}
                  </article>
                );
              })}
            </div>

            <p className="session-footnote">
              Times follow the published conference programme and may change on the day.
            </p>
          </div>
        </section>
      </main>
      <ConferenceFooter />
    </div>
  );
}
