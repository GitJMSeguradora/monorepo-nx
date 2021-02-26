import { css } from "styled-components";

/**
 * TOKENS
 *
 * Common values as proposed in the new Junto Design System, from 2020
 */

/**
 * spacings
 */
export const spacing = {
  xs: "4px",
  s: "8px",
  m: "16px",
  l: "24px",
  xl: "32px",
  xxl: "40px",
  "xxl-2": "48px",
  "xxl-3": "56px",
  "xxl-4": "64px",
  "xxl-5": "72px",
  "xxl-6": "80px",
  "xxl-7": "88px",
  "xxl-8": "96px"
};

/**
 * font
 */
export const font = {
  "xs-2": css`
    font-size: 10px;
    line-height: 12px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  xs: css`
    font-size: 12px;
    line-height: 16px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  s: css`
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  base: css`
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
    letter-spacing: 0;
  `,
  l: css`
    font-size: 20px;
    line-height: 26px;
    font-weight: 600;
    letter-spacing: 0;
  `,
  xl: css`
    font-size: 26px;
    line-height: 34px;
    font-weight: 600;
    letter-spacing: 0;
  `,
  "xl-2": css`
    font-size: 38px;
    line-height: 44px;
    font-weight: 600;
    letter-spacing: 0;
  `,
  "xl-3": css`
    font-size: 52px;
    line-height: 56px;
    font-weight: 600;
    letter-spacing: -0.76px;
  `,
  "xl-4": css`
    font-size: 60px;
    line-height: 64px;
    font-weight: 600;
    letter-spacing: -1px;
  `,

  size: {
    "xs-2": "10px",
    xs: "12px",
    s: "14px",
    base: "16px",
    l: "20px",
    xl: "26px",
    "xl-2": "38px",
    "xl-3": "52px",
    "xl-4": "60px"
  },

  lineHeight: {
    "xs-2": "12px",
    xs: "16px",
    s: "18px",
    base: "22px",
    l: "26px",
    xl: "34px",
    "xl-2": "44px",
    "xl-3": "56px",
    "xl-4": "64px"
  },

  weight: {
    regular: "normal",
    semibold: 600,
    extraBold: 800
  },

  family: {
    metropolis: "'Metropolis', sans-serif;"
  },

  letterSpacing: {
    xl: '9px'
  }
};

export const mediaQueries = {
  sm: "(min-width: 576px)",
  md: "(min-width: 768px)",
  lg: "(min-width: 992px)",
  xl: "(min-width: 1200px)"
};

export default {
  spacing,
  font,
  mediaQueries
};
