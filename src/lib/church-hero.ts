import type { CSSProperties } from "react";
import churchHeroJpg from "../assets/church-hero.jpg";
import churchHeroWebp from "../assets/church-hero.webp";

/**
 * Shared hero backdrop for every page (`.hero-bg`).
 *
 * Both files are exposed as CSS variables; `conference.css` uses the WebP via
 * `image-set()` in browsers that support it and keeps the original JPEG as the
 * fallback everywhere else. Same 1920×1088 image, same crop.
 */
export const churchHeroStyle = {
  "--hero-jpg": `url(${churchHeroJpg})`,
  "--hero-webp": `url(${churchHeroWebp})`,
} as CSSProperties;
