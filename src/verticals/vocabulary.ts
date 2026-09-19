/**
 * Words that must never appear on a given market's site.
 *
 * The extraction moved market wording into per-market content files, but shared
 * components get edited constantly, and one stray "patients" on the law site
 * undoes the whole point of running three sites. tests/dist/leak-guard.test.ts
 * scans each built site's visible text against this list, so a leak fails the
 * build instead of reaching a prospect.
 *
 * Adding a market word to a shared component should fail here. That is the point:
 * move it into the content files instead.
 */
import type { VerticalId } from './index';

/** Case-insensitive whole-word patterns, checked against visible text only. */
export const FORBIDDEN_TERMS: Record<VerticalId, RegExp[]> = {
  // Health keeps attorney/law-firm wording: it has a real legal client (the
  // Nazareth panel) in its medical-legal section. What it must not sound like is
  // the finance site.
  health: [/\bfiduciary\b/i, /\bSEC Marketing Rule\b/i, /\badvisory firms?\b/i, /\bmed spas? marketing\b/i],
  law: [
    /\bpatients?\b/i,
    /\bclinics?\b/i,
    /\bmed spas?\b/i,
    /\bwellness\b/i,
    /\bmidwif\w*\b/i,
    /\bchiroprac\w*\b/i,
    /\bhealth and wellness\b/i,
    /\bfiduciary\b/i,
    /\bfinancial advisors?\b/i
  ],
  finance: [
    /\bpatients?\b/i,
    /\bclinics?\b/i,
    /\bmed spas?\b/i,
    /\bwellness\b/i,
    /\bmidwif\w*\b/i,
    /\bchiroprac\w*\b/i,
    /\bhealth and wellness\b/i,
    /\battorneys?\b/i,
    /\blaw firms?\b/i
  ]
};

/**
 * Phrases that contain a forbidden word but are correct in that market. "Practice
 * area" is what a law firm calls its work; "practice" alone is fine everywhere.
 * Matched text is removed before the scan.
 */
export const ALLOWED_PHRASES: Record<VerticalId, RegExp[]> = {
  health: [],
  law: [/practice areas?/gi, /Nazareth Law Firm/gi, /Team Riley Law/gi, /\blaw firms?\b(?= websites)/gi],
  finance: []
};
