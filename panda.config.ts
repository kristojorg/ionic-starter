import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: "react",

  patterns: {
    extend: {
      shadowPart: {
        description: "Applies styles to a shadow part",
        properties: {
          // the part to target
          part: { type: "string" },
          // The direction of the scroll
          // direction: { type: "enum", value: ["horizontal", "vertical"] },
          // Whether to hide the scrollbar
          // hideScrollbar: { type: "boolean" },
        },
        // disallow the `overflow` property (in TypeScript)
        blocklist: ["overflow"],
        transform(props) {
          const { part, ...rest } = props;
          return {
            [`&::part(${part})`]: {
              ...rest,
            },
          };
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
