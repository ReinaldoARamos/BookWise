import { styled } from "../../../../stiches.config";

export const HeadingContainer = styled("header", {
  paddingTop: "$10",

  h2: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '0.75rem',
    fontSize: "$2xl"
  },

  svg: {
    color:  '$green100'
  }
});
