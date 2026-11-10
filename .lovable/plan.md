# Watch Live page with embedded Zoom (Meeting SDK)

## What exists today
- Site: TanStack Start (React) app, hosted on Lovable (runs on an edge/worker runtime). Pages: Home, Speakers, Donate, Programme, Privacy.
- Shared header (nav links + Register button) and shared footer component; all styling in the conference stylesheet.
- Lovable Cloud backend is enabled but currently unused by pages (registration moved to Google Form). No Zoom credentials stored yet.
- Server logic in this stack uses built-in server functions (equivalent to an Edge Function, same secret storage) — this is what we will use.

## What visitors will see (/live)
- Church-photo hero (same animated style) titled "Watch Live".
- Clear steps: enter your name, press "Join service", allow camera/mic prompts (you can stay muted/video off). Note that the host must start the meeting and allow participants in; until then you will see a "waiting for host" state.
- Embedded Zoom panel (Zoom Component View) inside a styled card, full-width on mobile.
- States: idle, preparing, joining, joined, waiting for host, error (with plain-language reason).
- Always-visible fallback: "Open in Zoom app" button opening the supplied join URL in a new tab; plus Meeting ID 811 7087 0077 and passcode shown.
- No fake player, no "live now" claim unless Zoom reports the join succeeded.

## Navigation
- Add a highlighted "Watch Live" link in the header (desktop + mobile menu) and a link in the footer. All existing pages untouched.

## Credentials needed (blocker)
You must create a **General App with Meeting SDK enabled** in the Zoom App Marketplace (on the same Zoom account that owns the meeting, or the meeting must allow external-account SDK joins) and get:
- `ZOOM_SDK_KEY` (Client ID)
- `ZOOM_SDK_SECRET` (Client Secret) — entered by you in a secure prompt / Project Settings → Secrets, never in chat.
Optional server config I will store (not secret but kept server-side): `ZOOM_MEETING_NUMBER`=81170870077, `ZOOM_MEETING_PASSCODE`=811 (the passcode is embedded in the join URL already). Note: unpublished/unreviewed SDK apps may only join meetings on the owner's account — Zoom app review may be required for public visitors.

## Technical details
- Package: `@zoom/meetingsdk` (current v3+/v4 Web SDK), Component View via `ZoomMtgEmbedded.createClient()`; loaded with dynamic `import()` inside a client-only component (SDK touches `window` at import), so SSR is unaffected.
- Signature: `createServerFn` `getZoomSignature` — validates input with zod (role forced to 0 = participant; no client-chosen meeting number), reads `ZOOM_SDK_KEY/SECRET` inside the handler, builds HS256 JWT (`appKey, sdkKey, mn, role, iat, exp(2h), tokenExp`) with Web Crypto (worker-safe, no Node crypto). Returns `{ signature, sdkKey, meetingNumber, passcode }`; on missing config returns a safe "Live viewing not configured" error. Nothing secret logged.
- Display name: required, trimmed, 2–50 chars; optional email.
- Zoom SDK requires cross-origin isolation headers only for gallery view/HD; we will use default view to avoid changing site-wide headers.
- Files: `src/routes/live.tsx`, `src/components/zoom-embed.tsx`, `src/lib/zoom.functions.ts`, header/footer link edits, CSS appended to conference stylesheet. Record the decision in AGENTS.md.
- Verification: build check, render /live, confirm signature endpoint returns safe error before secrets and a valid token after.
