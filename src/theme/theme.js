const theme = {
  fontSizes: [16, 20, 24, 34, 48, 60, 96],
  colors: {
    primary: "#2a73cc",
    primaryLight: "#6aa1ff",
    primaryDark: "#00489a",
    secondary: "#37a000",
    secondaryLight: "#6fd242",
    secondaryDark: "#007000",
    white: "#ffffff",
    grey: "#E1E2E1",
    darkGrey: "#afb0af",
  },
  space: [0, 4, 8, 16, 24, 32, 64],
  breakpoints: ["576px", "768px", "992px"], //,"1200px"
  mediaQueries: {
    small: `@media screen and (min-width: 576)`,
    medium: `@media screen and (min-width: 768)`,
    large: `@media screen and (min-width: 992)`,
  },
};

export default theme;
