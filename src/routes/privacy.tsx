import { createFileRoute } from "@tanstack/react-router";
import { ConferenceHeader } from "../components/conference-header";
import churchHero from "../assets/church-hero.jpg";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy & Terms of Use — Christ Believers Fellowship Conference 2026" },
      {
        name: "description",
        content:
          "Privacy Policy and Terms of Use for the Christ Believers Fellowship Nigeria 2026 Annual Conference.",
      },
      {
        property: "og:title",
        content: "Privacy Policy & Terms of Use — Christ Believers Fellowship Conference 2026",
      },
      {
        property: "og:description",
        content:
          "Privacy Policy and Terms of Use for the Christ Believers Fellowship Nigeria 2026 Annual Conference.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="conf">
      <ConferenceHeader />

      <main>
        <section className="hero hero-small">
          <div
            className="hero-bg"
            style={{ backgroundImage: `url(${churchHero})` }}
            aria-hidden="true"
          />
          <div className="hero-veil" aria-hidden="true" />
          <div className="container">
            <div className="eyebrow reveal d1">Legal Information</div>
            <h1 className="reveal d2">Privacy Policy &amp; Terms of Use</h1>
            <p className="reveal d3">Christ Believers Fellowship Nigeria — 2026 Annual Conference</p>
          </div>
        </section>

        <section className="privacy-section">
          <div className="container">
            <article className="legal-card reveal d4">
              <h2>Privacy Policy</h2>
              <p>
                <strong>Christ Believers Fellowship Nigeria</strong> respects your privacy and is
                committed to protecting your personal information.
              </p>
              <p>
                We may collect information such as your name, email address, phone number,
                church/organisation, and registration details to manage Conference registration,
                communicate important updates, and improve the Conference experience.
              </p>
              <p>
                Your information may be shared with trusted service providers where necessary for
                registration, payment, communication, or Conference management.
              </p>
              <p>
                We will take reasonable measures to protect your information and retain it only as
                long as necessary.
              </p>
              <p>
                You may request access, correction, deletion, or other applicable rights regarding
                your personal information in accordance with Nigerian data-protection laws.
              </p>
              <p>
                For privacy questions or requests, contact:
                <br />
                <strong>Christ Believers Fellowship Nigeria</strong>
                <br />
                Email:{" "}
                <a href="mailto:fellowshipchristbelievers@gmail.com">
                  fellowshipchristbelievers@gmail.com
                </a>
              </p>
            </article>

            <article className="legal-card reveal d5">
              <h2>Terms of Use</h2>
              <p>
                By registering for or participating in the <strong>CBF Nigeria 2026 Annual Conference</strong>,
                you agree to abide by these Terms of Use.
              </p>
              <ol>
                <li>
                  <strong>Registration:</strong> Participants must provide accurate and complete
                  information during registration.
                </li>
                <li>
                  <strong>Conduct:</strong> All participants are expected to behave respectfully and
                  comply with the rules and values of the Conference.
                </li>
                <li>
                  <strong>Conference Changes:</strong> CBF Nigeria reserves the right to modify the
                  programme, speakers, venue, or schedule when necessary.
                </li>
                <li>
                  <strong>Media:</strong> The Conference may be photographed, recorded, or
                  livestreamed for documentation and promotional purposes.
                </li>
                <li>
                  <strong>Content:</strong> Conference materials may not be reproduced, sold, or
                  distributed without permission.
                </li>
                <li>
                  <strong>Personal Information:</strong> Information provided during registration
                  will be handled according to our Privacy Policy.
                </li>
                <li>
                  <strong>Updates:</strong> These Terms may be updated when necessary.
                </li>
              </ol>
              <p>
                By completing registration, you confirm your acceptance of these Terms.
              </p>
              <p>
                <strong>Contact:</strong>{" "}
                <a href="tel:+2349130791737">+234 913 079 1737</a>,{" "}
                <a href="tel:+2348059470833">+234 805 947 0833</a>
              </p>
            </article>
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
