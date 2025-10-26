"use client";

import { C1Chat, ThemeProvider } from "@thesysai/genui-sdk";
import "@crayonai/react-ui/styles/index.css";
import { Theme, themePresets } from "@crayonai/react-ui";

export type ThemeFont =
  | "Inter"
  | "Roboto"
  | "Plus Jakarta Sans"
  | "Open Sans"
  | "Bitter"
  | "Merriweather"
  | "Playfair Display"
  | "Crimson Text"
  | "Geist"
  | "Figtree"
  | "Manrope"
  | "Work Sans"
  | "DM Sans"
  | "IBM Plex Serif"
  | "Space Mono"
  | "Geist Mono"
  | "Host Grotesk";

const generateTypography = () => ({
  fontPrimary: `400 16px/20px Roboto`,
  fontHeadingLarge: `600 28px/32.2px Roboto`,
  fontHeadingMedium: `600 24px/27.6px Roboto`,
  fontHeadingSmall: `500 18px/22.5px Roboto`,
  fontTitle: `500 16px/20px Roboto`,
  fontTitleMedium: `500 16px/20px Roboto`,
  fontTitleSmall: `500 16px/20px Roboto`,
  fontBody: `400 16px/24px Roboto`,
  fontBodyLargeHeavy: `500 18px/27px Roboto`,
  fontBodyLarge: `400 18px/27px Roboto`,
  fontBodyMedium: `400 16px/20px Roboto`,
  fontBodySmall: `400 14px/21px Roboto`,
  fontBodyHeavy: `500 16px/24px Roboto`,
  fontBodySmallHeavy: `600 16px/20px Roboto`,
  fontBodyLink: `500 16px/24px Roboto`,
  fontLabelLarge: `400 16px/19.2px Roboto`,
  fontLabelLargeHeavy: `500 16px/19.2px Roboto`,
  fontLabel: `400 14px/16.8px Roboto`,
  fontLabelHeavy: `500 14px/16.8px Roboto`,
  fontLabelMedium: `400 16px/20px Roboto`,
  fontLabelMediumHeavy: `600 16px/20px Roboto`,
  fontLabelSmall: `400 12px/14.4px Roboto`,
  fontLabelSmallHeavy: `500 12px/14.4px Roboto`,
  fontLabelExtraSmall: `400 10px/12px Roboto`,
  fontLabelExtraSmallHeavy: `500 10px/12px Roboto`,
  shadowS: "0px 1px 2px rgba(0, 0, 0, 0.04)",
  shadowM: "0px 4px 6px rgba(0, 0, 0, 0.04)",
  shadowL: "0px 1px 8px rgba(0, 0, 0, 0.08)",
  shadowXl: "0px 10px 15px rgba(0, 0, 0, 0.1)",
});

const theme = {
  ...themePresets.default.darkTheme,
  ...generateTypography(),
} as Theme;

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <C1Chat apiUrl="/api/chat" />
    </ThemeProvider>
  );
}
