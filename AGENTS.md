<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Zoom live embed: signatures are minted only in `src/lib/zoom.functions.ts` (uses ZOOM_CLIENT_ID as JWT appKey, role forced to participant, meeting from server env, no sdkKey sent to client); the SDK is dynamically imported client-side because it touches `window`.
