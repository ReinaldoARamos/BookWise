import { styled } from "../../../../../../stiches.config";

export const UserInfoContainer = styled("div", {
  display: "flex",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  marginLeft: "4rem",

  paddingTop: "6.8rem",
});

export const ProfileDisplay = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  gap: 24,
  section: {
    fontFamily: "$default",
    fontSize: "$lg",
    fontWeight: "$bold",
    color: "$gray100",
  },
  img: {
    borderRadius: 999,
    border: " 2px solid rgba(127, 209, 204, 1)",
  },

  div: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: 6,

    p: {
      color: "$gray400",
      fontFamily: "$default",
      fontSize: "$xs",
      fontWeight: "$bold",
    },
  },
});
