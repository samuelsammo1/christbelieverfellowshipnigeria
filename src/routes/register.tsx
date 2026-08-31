import { createFileRoute } from "@tanstack/react-router";
import { FormEvent, useState } from "react";

import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";
import { ConferenceHeader } from "../components/conference-header";
import { supabase } from "../integrations/supabase/client";
import "../conference.css";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — CBF Conference 2026" },
      {
        name: "description",
        content:
          "Register to attend the Christ Believers Fellowship Conference on 13–14 November 2026 in Ugehli, Delta State, Nigeria.",
      },
      { property: "og:title", content: "Register — CBF Conference 2026" },
      {
        property: "og:description",
        content: "Reserve your place at the Christ Believers Fellowship Conference 2026.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RegisterPage,
});

type RegistrationForm = {
  fullName: string;
  email: string;
  phone: string;
  church: string;
  city: string;
  accommodationNeeded: boolean;
  dietaryNeeds: string;
  notes: string;
};

const initialForm: RegistrationForm = {
  fullName: "",
  email: "",
  phone: "",
  church: "",
  city: "",
  accommodationNeeded: false,
  dietaryNeeds: "",
  notes: "",
};

function RegisterPage() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof RegistrationForm, value: string | boolean) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const submitRegistration = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setError("");

    const { error: insertError } = await supabase.from("conference_registrations").insert({
      full_name: form.fullName.trim(),
      email: form.email.trim().toLowerCase(),
      phone: form.phone.trim(),
      church: form.church.trim() || null,
      city: form.city.trim() || null,
      accommodation_needed: form.accommodationNeeded,
      dietary_needs: form.dietaryNeeds.trim() || null,
      notes: form.notes.trim() || null,
    });

    setSubmitting(false);

    if (insertError) {
      setError("We couldn't save your registration. Please check your details and try again.");
      return;
    }

    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="conf">
      <ConferenceHeader />
      <main>
        <section className="page-hero">
          <div className="container">
            <div className="eyebrow">Conference 2026</div>
            <h1>Register to Attend</h1>
            <p>
              We look forward to welcoming you on 13–14 November 2026 in Ugehli, Delta State.
              Registration is free, and accommodation is available for attendees who need it.
            </p>
          </div>
        </section>

        <section>
          <div className="container registration-layout">
            <div className="registration-intro">
              <div className="eyebrow">Your place at the gathering</div>
              <h2>Come ready to worship, learn and grow.</h2>
              <p>
                Share a few details with the conference team so we can prepare well for your
                arrival and make the right arrangements for your stay.
              </p>
              <div className="registration-facts">
                <div>
                  <strong>13–14 Nov</strong>
                  <span>Conference dates</span>
                </div>
                <div>
                  <strong>Ugehli</strong>
                  <span>Delta State, Nigeria</span>
                </div>
                <div>
                  <strong>Free</strong>
                  <span>Admission and registration</span>
                </div>
              </div>
            </div>

            <div className="registration-card">
              {submitted ? (
                <div className="registration-success" role="status">
                  <div className="success-mark">✓</div>
                  <div className="eyebrow">Registration received</div>
                  <h2>We’ll see you in Ugehli.</h2>
                  <p>
                    Thank you for registering. The conference team has received your details and
                    will follow up with any accommodation information you need.
                  </p>
                  <Button className="btn btn-gold" type="button" onClick={() => setSubmitted(false)}>
                    Register another attendee
                  </Button>
                </div>
              ) : (
                <form className="registration-form" onSubmit={submitRegistration}>
                  <div className="form-heading">
                    <div className="eyebrow">Attendee details</div>
                    <h2>Reserve your place</h2>
                    <p>Fields marked with an asterisk are required.</p>
                  </div>

                  <div className="form-grid">
                    <div className="field field-wide">
                      <Label htmlFor="full-name">Full name *</Label>
                      <Input
                        id="full-name"
                        required
                        value={form.fullName}
                        onChange={(event) => updateField("fullName", event.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="field">
                      <Label htmlFor="email">Email address *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className="field">
                      <Label htmlFor="phone">Phone number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                        placeholder="Your phone number"
                      />
                    </div>
                    <div className="field">
                      <Label htmlFor="church">Church or fellowship</Label>
                      <Input
                        id="church"
                        value={form.church}
                        onChange={(event) => updateField("church", event.target.value)}
                        placeholder="Church or fellowship name"
                      />
                    </div>
                    <div className="field">
                      <Label htmlFor="city">City / town</Label>
                      <Input
                        id="city"
                        value={form.city}
                        onChange={(event) => updateField("city", event.target.value)}
                        placeholder="Where are you travelling from?"
                      />
                    </div>
                  </div>

                  <div className="accommodation-option">
                    <Checkbox
                      id="accommodation"
                      checked={form.accommodationNeeded}
                      onCheckedChange={(checked) => updateField("accommodationNeeded", checked === true)}
                    />
                    <div>
                      <Label htmlFor="accommodation">I need accommodation</Label>
                      <p>Please select this so the team can plan a room for you.</p>
                    </div>
                  </div>

                  <div className="field">
                    <Label htmlFor="dietary-needs">Dietary needs</Label>
                    <Input
                      id="dietary-needs"
                      value={form.dietaryNeeds}
                      onChange={(event) => updateField("dietaryNeeds", event.target.value)}
                      placeholder="Optional"
                    />
                  </div>

                  <div className="field">
                    <Label htmlFor="notes">Anything else we should know?</Label>
                    <Textarea
                      id="notes"
                      value={form.notes}
                      onChange={(event) => updateField("notes", event.target.value)}
                      placeholder="Optional note for the conference team"
                      rows={4}
                    />
                  </div>

                  {error ? <p className="form-error" role="alert">{error}</p> : null}

                  <Button className="btn btn-gold registration-submit" type="submit" disabled={submitting}>
                    {submitting ? "Submitting registration…" : "Submit registration"}
                  </Button>
                  <p className="form-note">Your details are used only to prepare for this conference.</p>
                </form>
              )}
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