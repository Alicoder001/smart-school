/**
 * Tailwind custom colors configuration
 */

export const TAILWIND_COLORS = {
  lamaPurple: "#C3EBFA",
  lamaPurpleLight: "#EDF9FD",
  lamaYellow: "#FAE27C",
  lamaYellowLight: "#FEFCE8",
  lamaSky: "#CFCEFF",
  lamaSkyLight: "#F1F0FF",
} as const;

export type LamaColor = keyof typeof TAILWIND_COLORS;
