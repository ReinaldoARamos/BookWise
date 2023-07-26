import { globalCss } from "@ignite-ui/react";

export const globalStyles = globalCss({
  "*": {
    boxSizing: "border-box",
    padding: 0,
    margin: 0,
  },

  body: {
    backgroundColor: "$gray800",
    color: "$gray100",

    scrollbarWidth: "none",
    // For Internet Explorer
    "-ms-overflow-style": "none",

    // Hide the scrollbar in both axis (vertical and horizontal)
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
