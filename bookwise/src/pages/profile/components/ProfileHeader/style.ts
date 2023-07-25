import { styled } from "../../../../../stiches.config"
export const HeadingContainer = styled("header", {
  paddingTop: "0.75rem",


  h2: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '0.75rem',
    fontSize: "$2xl",
    marginBottom: '$10',
  },

  svg: {
    color:  '$green100'
  },

  section: {
    width: 624,
    height: 48,
   
    borderRadius: 8,
    backgroundColor: "transparent",
    border: "1px solid $gray500",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    ":hover": {
      cursor: "pointer",
    },
    svg: {
      width: "3rem",
      color: "$gray500",
      transition: "0.4s",
    },

    input: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      border: "none",
      marginLeft: "0.5rem",
      color: "$gray100",
      fontWeight: "bold",
      fontFamily: "$default",
    },

    ":focus": {
      outline: "none",
    },
  },
});
