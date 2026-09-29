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
          "Programme of events for the Christ Believers Fellowship Conference 2026, 13–15 November 2026, Ugehli, Delta State, Nigeria.",
      },
    ],
  }),
  component: Programme,
});

function Programme() {
  return (
     <div className="conf">
  <ConferenceHeader />

  <main>
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
         The Ransom That
          <br />
        Will Restore Humanity
        </h1>
        
        <div className="date reveal d4">
          13–15 November 2026
          &nbsp; • &nbsp;
          Ugehli, Delta State, Nigeria
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
      <h3>Chairman: Bro. Emmanuel Jackson</h3>

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
  ["10:00 am – 10:15 am", "Opening Hymn / Song", "—"],
  ["10:15 am – 10:20 am", "Opening Prayer", "Bro. Daniel Jimmy"],
  [
    "10:20 am – 10:40 am",
    "Welcome Address / Reading of Psalm 95:1–8",
    "Welcome Address: Bro. Paul Teshoma / Reading: Sis. Ruth Jimmy",
  ],
  ["10:40 am – 10:45 am", "Hymn / Prayer", "Bro. Godwin Edoja"],
  [
    "10:45 am – 11:15 am",
    'Bible Study: "Humanity’s Original Destiny" – Genesis 1:26–31; Psalm 8:4–9',
    "Bro. Monday Udo",
  ],
  ["11:15 am – 11:20 am", "Hymn / Prayer", "Bro. Dennis y"],
  ["11:20 am – 11:30 am", "Intermission", "—"],
  ["11:30 am – 11:35 am", "Hymn / Prayer", "Bro. Richard"],
  ["11:35 am – 12:15 pm", "SYMPOSIUM", "Topic / Question:"],
  ["12:15 pm – 12:20 pm", "Hymn / Prayer", "Bro. Godwin Edoja"],
  [
    "12:20 pm – 12:50 pm",
    'Bible Study: "The Tragedy: How Humanity Lost Life" – Genesis 2:16–17; 3:1–24; Romans 5:12',
    "Bro. Emmanuel Jackson",
  ],
  [
    "12:50 pm – 1:20 pm",
    "Humanity Today: Dangers Facing Our World – Matthew 24:4–14; 2 Timothy 3:1–5; Luke 21:25–26",
    "Bro. Jim Sochacki",
  ],
  ["1:20 pm – 2:00 pm", "Lunch", "—"],
];

const saturdayPM: Row[] = [
  ["2:00 pm – 2:05 pm", "Hymn and Prayer", "Bro. Dennis Peter"],
  [
    "2:05 pm – 2:35 pm",
    'Bible Study: "Why a Ransom Was Necessary" – Psalm 49:6–9; Romans 3:23–26',
    "Bro. Michael Walter",
  ],
  ["2:35 pm – 2:40 pm", "Hymn / Prayer", "Bro. Owo Okon"],
  [
    "2:40 pm – 3:10 pm",
    'Bible Study: "Jesus: The Man Who Gave His Life" – Matthew 20:28; John 10:17–18',
    "Bro. Godwin Edoja",
  ],
  ["3:10 pm – 3:15 pm", "Hymn / Prayer", "Bro. Inimfon Jackson"],
  ["3:15 pm – 3:20 pm", "Intercession", "—"],
  ["3:20 pm – 3:50 pm", 'Bible Study: "The Resurrection"', "Bro. Gordon Coulson"],
  ["3:50 pm – 3:55 pm", "Hymn and Prayer", "Bro. Gordon Coulson"],
  ["3:55 pm – 4:55 pm", "PANEL DISCUSSION", "Panelists"],
  ["4:55 pm – 5:00 pm", "Hymn and Closing Prayer", "—"],
];

const sundayAM: Row[] = [
  ["7:30 am – 8:50 am", "Breakfast", "—"],
  ["8:50 am – 9:30 am", "Arrival of Brethren at the Conference Hall", "—"],
  ["9:30 am – 10:00 am", "Worship Service (Morning Devotion)", "—"],
  ["10:00 am – 10:15 am", "Opening Hymn / Song", "—"],
  ["10:15 am – 10:20 am", "Opening Prayer", "Bro. UtibeAbasi Peter"],
  [
    "10:20 am – 10:45 am",
    'Bible Study: "Jesus: The Man Who Gave His Life" – Matthew 20:28; John 1:14; 10:17–18',
    "Bro. Anosike E.",
  ],
  ["10:45 am – 10:50 am", "Hymn / Prayer", "Bro. Anosike E."],
  [
    "10:50 am – 11:20 am",
    'Bible Study: "The Return and Kingdom of Christ" – Daniel 2:44; Psalm 2:6–12; Revelation 11:15',
    "Bro. Sunday Enang",
  ],
  [
    "11:20 am – 11:55 am",
    "The Ransom’s Final Triumph: Humanity Reconciled to God – 1 Corinthians 15:20–28; Revelation 21:3–4; Revelation 22:3–5",
    "Bro. Michael Walter",
  ],
  ["11:55 am – 12:00 pm", "Intermission", "—"],
];

const sundayPM: Row[] = [
  ["12:00 pm – 12:15 pm", "Hymn / Prayer", "Bro. Monday Pius"],
  ["12:15 pm – 1:00 pm", "SYMPOSIUM", "Topic / Question: / Prayer"],
  ["1:00 pm – 2:00 pm", "Lunch", "—"],
  [
    "2:00 pm – 2:20 pm",
    "Announcement and Closing Remarks",
    "Bro. Emmanuel Jackson",
  ],
  ["2:20 pm", "Closing Hymn", "—"],
  ["After Closing Hymn", "Closing Prayer", "—"],
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
              <td>{responsible}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}