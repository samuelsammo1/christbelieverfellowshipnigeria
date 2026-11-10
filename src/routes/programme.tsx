import { createFileRoute } from "@tanstack/react-router";

import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";
import "../conference.css";
import { ConferenceFooter } from "../components/conference-footer";

export const Route = createFileRoute("/programme")({
  head: () => ({
    meta: [
      {
        title: "Conference Programme | Christ Believers Fellowship 2026",
      },
      {
        name: "description",
        content:
          "Programme of events for the Christ Believers Fellowship Conference 2026, 13–15 November 2026, Ughelli, Delta State, Nigeria.",
      },
    ],
  }),
  component: Programme,
});

function Programme() {
  return (
     <div className="conf">
  <ConferenceHeader />

  <main id="main">
    <section className="hero programme-hero">
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${churchHero})` }}
        aria-hidden="true"
      />

      <div className="hero-veil" aria-hidden="true" />

      <div className="container">
        <div className="eyebrow reveal d1">
          2026 ANNUAL CONFERENCE
        </div>

        <h1>
         The Ransom,
          <br />
        Restoration of Humanity
        </h1>

        <div className="date reveal d4">
          13–15 November 2026
          &nbsp; • &nbsp;
          Ughelli, Delta State, Nigeria
        </div>
      </div>
    </section>

      <section className="programme-page">
        <div className="container">
         <div className="programme-page-content">

  <section className="programme-day">
    <div className="programme-day-header">
      <span>01</span>

      <div>
        <div className="eyebrow">Friday · 13 November 2026</div>
        <h2>Arrival &amp; Fellowship</h2>
        <p>
          Arrival, accommodation and fellowship as the conference begins.
        </p>
      </div>
    </div>

    <h3>Friday Evening</h3>

    <ScheduleTable rows={friday} />
  </section>


  <section className="programme-day">
    <div className="programme-day-header">
      <span>02</span>

      <div>
        <div className="eyebrow">Saturday · 14 November 2026</div>
        <h2>Teaching, Worship &amp; Reflection</h2>
        <p>
          A full day of biblical teaching, worship, fellowship and discussion.
        </p>
      </div>
    </div>

    <div className="programme-session">
      <div className="eyebrow">Morning Session</div>
      <h3>Chairman: Bro. Gideon Jimmy Amah</h3>

      <ScheduleTable rows={saturdayAM} />
    </div>

    <div className="programme-session">
      <div className="eyebrow">Afternoon Session</div>
      <h3>Chairman: Bro. Owo Okon</h3>

      <ScheduleTable rows={saturdayPM} />
    </div>
  </section>


  <section className="programme-day">
    <div className="programme-day-header">
      <span>03</span>

      <div>
        <div className="eyebrow">Sunday · 15 November 2026</div>
        <h2>Hope, Kingdom &amp; Closing</h2>
        <p>
          The final day of teaching, reflection, fellowship and evangelism.
        </p>
      </div>
    </div>

    <div className="programme-session">
      <div className="eyebrow">Morning Session</div>
      <h3>Chairman: Bro. Daniel Jimmy</h3>

      <ScheduleTable rows={sundayAM} />
    </div>

    <div className="programme-session">
      <div className="eyebrow">Afternoon &amp; Closing Session</div>
      <h3>Conference Closing</h3>

      <ScheduleTable rows={sundayPM} />
    </div>
  </section>

</div>
        </div>
      </section>
      
    </main>
    <ConferenceFooter />
    </div>
  );
}
type Row = [string, string, string];

const friday: Row[] = [
  ["4:30 pm – 6:00 pm", "Arrival of Brethren", "—"],
  ["6:00 pm – 7:30 pm", "Supper", "—"],
  [
    "After Supper",
    "Assigning Rooms and Address to the Brethren",
    "Bro. Paul Teshoma",
  ],
];

const saturdayAM: Row[] = [
  ["7:30 am – 8:50 am", "Breakfast", "—"],
  ["8:50 am – 9:30 am", "Arrival of Brethren at the Conference Hall", "—"],
  ["9:30 am – 10:00 am", "Worship Service (Morning Devotion)", "—"],
  ["10:00 am – 10:05 am", "Opening Hymn No. 169", "—"],
  ["10:05 am – 10:10 am", "Opening Prayer", "Bro. Daniel Jimmy"],
  [
    "10:10 am – 10:30 am",
    "Welcome Address / Reading of Psalm 95:1–8",
    "Welcome: Bro. Paul Teshoma / Reading: Sis. Ruth Jimmy",
  ],
  ["10:30 am – 10:35 am", "Hymn No. 137 / Prayer", "Bro. Godwin Edoja"],
  [
    "10:35 am – 11:05 am",
    'Bible Study: "Humanity’s Original Destiny" – Genesis 1:26–31; Psalm 8:4–9',
    "Bro. Monday Udo",
  ],
  ["11:05 am – 11:10 am", "Hymn No. 359 / Prayer", "Bro. Dennis Peter"],
  [
    "11:10 am – 11:25 am",
    'Restoration Symposium · Part 1: "The Need and Promise of Restoration" – Acts 3:19–21',
    "Bro. Paul Teshoma",
  ],
  [
    "11:25 am – 11:40 am",
    'Restoration Symposium · Part 2: "The Ransom and the Accomplishment of Restoration" – Acts 3:19–21; Matthew 20:28',
    "Bro. Owo Okon / Bro. Dennis Peter",
  ],
  ["11:40 am – 11:45 am", "Hymn No. 23 / Prayer", "Bro. Owo Okon / Bro. Dennis Peter"],
  [
    "11:45 am – 12:15 pm",
    'Bible Study: "The Tragedy: How Humanity Lost Life" – Genesis 2:16–17; 3:1–24; Romans 5:12',
    "Bro. Emmanuel Jackson",
  ],
  ["12:15 pm – 12:20 pm", "Intermission", "—"],
  [
    "12:20 pm – 12:50 pm",
    'Bible Study: "Why a Ransom Was Necessary" – Psalm 49:6–9; Romans 3:23–26',
    "Bro. Bruce Blake",
  ],
  [
    "12:50 pm – 1:20 pm",
    'Bible Study: "Jesus: The Man Who Gave His Life" – Matthew 20:28; John 10:17–18',
    "Bro. Godwin Edoja",
  ],
  ["1:20 pm – 1:25 pm", "Hymn No. 30 / Prayer", "Bro. Godwin Edoja"],
  ["1:25 pm – 2:00 pm", "Lunch", "—"],
];

const saturdayPM: Row[] = [
  ["2:00 pm – 2:05 pm", "Hymn No. 5 / Prayer", "Bro. Dennis Peter"],
  [
    "2:05 pm – 2:35 pm",
    'Bible Study: "The Ransom – What Jesus Accomplished" – Hebrews 7:27',
    "Bro. Percival Blenman",
  ],
  ["2:35 pm – 2:40 pm", "Hymn No. 342 / Prayer", "Sis. Merit Teshoma"],
  [
    "2:40 pm – 3:10 pm",
    'Bible Study: "Humanity Today: Dangers Facing Our World" – Matthew 24:4–14; 2 Timothy 3:1–5; Luke 21:25–26',
    "Bro. Jim Sochacki (USA)",
  ],
  ["3:10 pm – 3:15 pm", "Hymn No. 168 / Prayer", "Bro. Inimfon Jackson"],
  ["3:15 pm – 3:20 pm", "Intermission", "—"],
  ["3:20 pm – 3:50 pm", 'Bible Study: "The Resurrection"', "Bro. Gordon Coulson"],
  ["3:50 pm – 3:55 pm", "Hymn No. 243 / Prayer", "Bro. Gordon Coulson"],
  [
    "3:55 pm – 4:55 pm",
    "Panel Discussion",
    "Bro. Gideon Jimmy (Chairman), Bro. Sunday Enang, Bro. Anosike Onyenwe, Bro. Dennis Peter, Bro. Monday Udo",
  ],
  ["4:55 pm – 5:00 pm", "Closing Hymn No. 4 / Closing Prayer", "Bro. Monday Udo"],
];

const sundayAM: Row[] = [
  ["7:30 am – 8:50 am", "Breakfast", "—"],
  ["8:50 am – 9:30 am", "Arrival of Brethren at the Conference Hall", "—"],
  ["9:30 am – 10:00 am", "Worship Service (Morning Devotion)", "—"],
  ["10:00 am – 10:15 am", "Opening Hymn No. 319 / Opening Prayer", "Bro. UtibeAbasi Peter"],
  [
    "10:15 am – 10:45 am",
    'Bible Study: "The Return and Kingdom of Christ" – Daniel 2:44; Psalm 2:6–12; Revelation 11:15',
    "Bro. Anosike Onyenwe",
  ],
  ["10:45 am – 10:50 am", "Hymn No. 8 / Prayer", "Bro. Anosike Onyenwe"],
  [
    "10:50 am – 11:20 am",
    'Bible Study: "The Kingdom’s Work of Restoration" – Isaiah 35:1–10; Isaiah 65:17–25; Revelation 21:1–5',
    "Bro. Sunday Enang",
  ],
  [
    "11:20 am – 11:55 am",
    'Bible Study: "The Ransom’s Final Triumph: Humanity Reconciled to God" – 1 Corinthians 15:20–28; Revelation 21:3–4; 22:3–5',
    "Bro. Michael Walter",
  ],
  ["11:55 am – 12:10 pm", "Intermission", "—"],
];

const sundayPM: Row[] = [
  ["12:10 pm – 12:15 pm", "Hymn No. 187 / Prayer", "Sis. Merit Paul"],
  ["12:15 pm – 12:25 pm", "Word of Encouragement", "Bro. Monye Piue"],
  ["12:25 pm – 1:00 pm", "Questions Time", "—"],
  ["1:00 pm – 2:20 pm", "Announcements and Closing Remarks", "Bro. Gideon Jimmy"],
  ["2:20 pm – 3:00 pm", "Closing Hymns Nos. 84 and 64 / Closing Prayer", "—"],
  ["After Closing Prayer", "Evangelism", "—"],
];

function ScheduleTable({ rows }: { rows: Row[] }) {
  return (
    <div className="schedule-table-wrap">
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Programme</th>
            <th>Responsible</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(([time, programme, responsible], index) => (
            <tr key={`${time}-${index}`}>
              <td>{time}</td>
              <td>{programme}</td>
              <td className={responsible === "—" ? "is-empty" : undefined}>{responsible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}