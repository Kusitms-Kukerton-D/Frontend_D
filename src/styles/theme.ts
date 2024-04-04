import { DefaultTheme } from "styled-components";
/* TODO: 디자인 시스템 수정하기 */

const colors = {
  primary10: "#404079",
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
    font-size : ${size}rem;
    line-height : ${lineHeight}%;
    `;
};

const fonts = {
  heading1: FONT({
    font: "Pretendard",
    weight: 700,
    size: 5.6,
    lineHeight: 160,
  }),
};

const deviceSizes = {
  mobile: "390px",
  tablet: "768px",
  desktop: "1536px",
};

const devices = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};

export type ColorsTypes = typeof colors;
export type FontsTypes = typeof fonts;
export type DevicesTypes = typeof devices;

export const theme: DefaultTheme = {
  colors,
  fonts,
  devices,
};
