'use client'

import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react'

export const MainColors = {
  primary: {
    50: "#fff9e8",
    100: "#ffeeb9",
    200: "#ffe38b",
    300: "#ffd85d",
    400: "#ffcd2e",
    500: "#ffc200",
    600: "#d19f00",
    700: "#a27c00",
    800: "#745800",
    900: "#463500",
    950: "#302400",
  },
};

const baseTheme = extendTheme({
  fonts: {
    heading: 'var(--font-raleway)',
    body: 'var(--font-raleway)',
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 700,
        color: "black",
      },
      focus: {
        outline: "none",
      },
      defaultProps: {
        color: "black"
      }
    },
    Heading: {
      variants: {
        h1: {
          fontSize: "clamp(3rem, 6vw, 6rem)",
          fontWeight: 700,
          fontStyle: "normal",
        },
        h2: {
          fontSize: "clamp(2.5rem, 5vw, 4rem)",
          fontWeight: 700,
        },
        h3: {
          fontSize: "clamp(2rem, 3vw, 2.4rem)",
          fontWeight: 700,
        },
      },
    },
  },
  colors: {
    ...MainColors,
  },
  styles: {
    global: () => ({
      // external styles go here when necessary
      "*, *:after, *:before": {
        boxsizing: "inherit",
      },

      "*::-webkit-scrollbar": {
        display: "none",
      },

      html: {
        scrollBehavior: "smooth",
        boxSizing: "border-box",
        fontFamily: "Neue Haas Grotesk Display Pro",
      },

      body: {
        boxSizing: "border-box",
        overflowX: "hidden",
      },
    }),
  },
}, withDefaultColorScheme({ colorScheme: "primary" }));



export function Providers({ children }: { children: React.ReactNode }) {
  return <ChakraProvider theme={baseTheme}>{children}</ChakraProvider>
}