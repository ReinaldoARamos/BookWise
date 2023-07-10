import { styled } from "../../../../../stiches.config";

export const HeaderContainer = styled("header", {
  header: {
    marginTop: "$10",
    paddingLeft: 12,
    display: "flex",
    justifyContent: "space-between",
    width: "62.25rem",
    height: "2.125rem",

    div: {
      fontFamily: "$default",
      fontSize: "$2xl",
    },

    section: {
      width: 433,
      height: 48,
      backgroundColor: "transparent",
      border: "1px solid $gray500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      svg: {
        width: "3rem",
        color: "$gray500",
      },
      input: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        border: "none",
        marginLeft: "0.5rem",
        color: "$gray400",
        fontWeight: "bold",
        fontFamily: "$default",
      },

      ":hover": {
        cursor: "pointer",

      },

      ":focus": {
        outline: "none",
      },
    },
  },
});
