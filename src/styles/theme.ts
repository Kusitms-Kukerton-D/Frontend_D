import { DefaultTheme } from "styled-components";
/* TODO: 디자인 시스템 수정하기 */

const colors = {
  main800: "#0080FF",
  main700: "#3399FF",
  main600: "#66B3FF",
  main500: "#99CCFF",
  main400: "#CCE6FF",

  sub800: "#FF3679",
  sub700: "#FF5E94",
  sub600: "#FF3679",
  sub500: "#FFAFC9",
  sub400: "#FFD7E4",

  gray900: "#222222",
  gray800: "#5F646F",
  gray700: "#9397A1",
  gray600: "#9397A1",
  gray500: "#ABB0B9",
  gray400: "#C5C8CE",
  gray200: "#E2E5EB",
  gray150: "#EBEEF1",
  gray100: "#F2F4F8",
  gray50: "#FBFBFD",
  gray20: "#FDFDFE",
  gray0: "#FFFFFF",

  black: "#000000",
} as const;

interface Font {
  font: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ font, weight, size, lineHeight }: Font): string => {
  return `
    font-family : "${font}";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}%;
    `;
};

const fonts = {
  primary: FONT({
    font: "SUIT",
    weight: 600,
    size: 28,
    lineHeight: 160,
  }),

  heading1: FONT({
    font: "SUIT",
    weight: 600,
    size: 22,
    lineHeight: 160,
  }),
  heading2: FONT({
    font: "SUIT",
    weight: 600,
    size: 18,
    lineHeight: 160,
  }),
  heading3: FONT({
    font: "SUIT",
    weight: 600,
    size: 16,
    lineHeight: 120,
  }),

  body1: FONT({
    font: "SUIT",
    weight: 400,
    size: 16,
    lineHeight: 160,
  }),
  body2: FONT({
    font: "SUIT",
    weight: 400,
    size: 14,
    lineHeight: 160,
  }),

  caption: FONT({
    font: "SUIT",
    weight: 400,
    size: 13,
    lineHeight: 160,
  }),

  label1: FONT({
    font: "SUIT",
    weight: 600,
    size: 16,
    lineHeight: 160,
  }),
  label2: FONT({
    font: "SUIT",
    weight: 400,
    size: 16,
    lineHeight: 160,
  }),
  label3: FONT({
    font: "SUIT",
    weight: 400,
    size: 14,
    lineHeight: 160,
  }),
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
