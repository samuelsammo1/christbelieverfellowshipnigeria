import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  name: z.string().trim().min(2).max(50),
});

function b64url(input: string | ArrayBuffer) {
  const bytes = typeof input === "string" ? new TextEncoder().encode(input) : new Uint8Array(input);
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/=+$/, "").replace(/\+/g, "-").replace(/\//g, "_");
}

export type ZoomJoinConfig =
  | { ok: true; signature: string; meetingNumber: string; passcode: string; userName: string }
  | { ok: false; error: string };

// Public endpoint: always issues participant (role 0) signatures for the configured meeting only.
export const getZoomJoinConfig = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => inputSchema.parse(input))
  .handler(async ({ data }): Promise<ZoomJoinConfig> => {
    const clientId = process.env["ZOOM_CLIENT_ID"];
    const clientSecret = process.env["ZOOM_CLIENT_SECRET"];
    const meetingNumber = (process.env["ZOOM_MEETING_NUMBER"] ?? "81170870077").replace(/\D/g, "");
    const passcode = process.env["ZOOM_MEETING_PASSCODE"] ?? "811";
    if (!clientId || !clientSecret) {
      return { ok: false, error: "Live viewing on this website is not configured yet. Please use the Zoom button below." };
    }
    try {
      const iat = Math.floor(Date.now() / 1000) - 30;
      const exp = iat + 60 * 60 * 2;
      const header = b64url(JSON.stringify({ alg: "HS256", typ: "JWT" }));
      const payload = b64url(
        JSON.stringify({ appKey: clientId, mn: meetingNumber, role: 0, iat, exp, tokenExp: exp }),
      );
      const key = await crypto.subtle.importKey(
        "raw", new TextEncoder().encode(clientSecret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"],
      );
      const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(`${header}.${payload}`));
      return { ok: true, signature: `${header}.${payload}.${b64url(sig)}`, meetingNumber, passcode, userName: data.name };
    } catch {
      console.error("Zoom signature generation failed");
      return { ok: false, error: "Could not prepare the live session. Please use the Zoom button below." };
    }
  });
