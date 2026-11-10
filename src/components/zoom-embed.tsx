import { useRef, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { getZoomJoinConfig } from "../lib/zoom.functions";

type Status = "idle" | "preparing" | "joining" | "joined" | "error";

export function ZoomEmbed({ fallbackUrl }: { fallbackUrl: string }) {
  const container = useRef<HTMLDivElement>(null);
  const getConfig = useServerFn(getZoomJoinConfig);
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function join(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = name.trim();
    if (trimmed.length < 2 || trimmed.length > 50) {
      setError("Please enter your name (2–50 characters).");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("preparing");
    try {
      const cfg = await getConfig({ data: { name: trimmed } });
      if (!cfg.ok) throw new Error(cfg.error);
      setStatus("joining");
      const { default: ZoomMtgEmbedded } = await import("@zoom/meetingsdk/embedded");
      const client = ZoomMtgEmbedded.createClient();
      await client.init({
        zoomAppRoot: container.current!,
        language: "en-US",
        patchJsMedia: true,
        leaveOnPageUnload: true,
        customize: { video: { isResizable: true, viewSizes: { default: { width: Math.min(container.current!.clientWidth, 1000), height: Math.round(Math.min(container.current!.clientWidth, 1000) * 0.5625) } } } },
      });
      await client.join({
        signature: cfg.signature,
        meetingNumber: cfg.meetingNumber,
        password: cfg.passcode,
        userName: cfg.userName,
      });
      setStatus("joined");
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "object" && err && "reason" in err
            ? String((err as { reason: unknown }).reason)
            : "";
      setError(
        msg && msg.length < 200
          ? msg
          : "We couldn't join the meeting. The host may not have started it yet — please try again or use the Zoom button.",
      );
      setStatus("error");
    }
  }

  const busy = status === "preparing" || status === "joining";

  return (
    <div className="live-card">
      {status !== "joined" && (
        <form className="live-form" onSubmit={join}>
          <label htmlFor="live-name">Your name</label>
          <div className="live-form-row">
            <input
              id="live-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Grace Okon"
              maxLength={50}
              disabled={busy}
            />
            <button className="btn btn-gold" type="submit" disabled={busy}>
              {status === "preparing" ? "Preparing…" : status === "joining" ? "Joining…" : "Join service"}
            </button>
          </div>
          {status === "joining" && (
            <p className="live-status">Connecting to Zoom… if the host hasn't started yet, you'll wait here.</p>
          )}
          {status === "error" && <p className="live-error" role="alert">{error}</p>}
        </form>
      )}
      {status === "joined" && <p className="live-status ok">You're connected through Zoom.</p>}
      <div ref={container} className="live-zoom-root" />
      <a className="btn btn-outline live-fallback" href={fallbackUrl} target="_blank" rel="noopener noreferrer">
        Open in Zoom instead
      </a>
    </div>
  );
}
