import styled from 'styled-components';

const colors = {
    /* blue */
    Blue50: "#e8f3ff",
    Blue100: "#c9e2ff",
    Blue200: "#90c2ff",
    Blue300: "#64a8ff",
    Blue400: "#4593fc",
    Blue500: "#3182f6",
    Blue600: "#2272eb",
    Blue700: "#1b64da",
    Blue800: "#1957c2",
    Blue900: "#194aa6",
    /* grey */
    Grey50: "#f9fafb",
    Grey100: "#f2f4f6",
    Grey200: "#e5e8eb",
    Grey300: "#d1d6db",
    Grey400: "#b0b8c1",
    Grey500: "#8b95a1",
    Grey600: "#6b7684",
    Grey700: "#4e5968",
    Grey800: "#333d4b",
    Grey900: "#191f28",

    /* white*/ 
    white50: "#FFFFFF",
};

const mediaSize = {
    xs: "screen and (max-width: '400px')",
    sm: "screen and (max-width: '640px')",
    md: "screen and (max-width: '768px')",
    lg: "screen and (max-width: '1024px')",
    xl: "screen and (max-width: '1280px')",
    "2xl": "screen and (max-width: '1536px')",
};

const size = {
    xs: "0.2em",
    sm: "0.4em",
    md: "0.6em",
    lg: "1em",
    xl: "1.4em",
    "2xl": "1.6em",
};


const theme = {
    colors,
    mediaSize,
    size,
};

export default theme;

export type theme = typeof theme;