import { styled } from "../../../stiches.config";
export const AvaliationBox = styled("div", {
  width: "38rem",
  height: "17.5rem",
  backgroundColor: "$gray700",
  marginTop: "2rem",
  borderRadius: 8,
  display: "flex",
  flexDirection: "column",
});

export const ProfileBox = styled("div", {
  display: "flex",
  width: 560,
  height: 65,
  justifyContent: "space-between",
  alignItems: "center",
  paddingLeft: "$3",
  paddingTop: "$6",
  marginLeft: "0.50rem",
  alignContent: "center",

  div: {
    svg: {
      marginBottom: "1.7rem",
    },
  },
});

export const Profile = styled("div", {
  display: "flex",

  section: {
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "0.3rem",
    paddingLeft: "0.6rem",
    color: "$gray100",
    marginLeft: "0.2rem",
    fontSize: '1rem',
    div: {
      display: "flex",
      alignItems: "center",
      color: "$gray400",
      marginTop: 4,
      fontSize: 14
    },
  },

  img: {
    borderRadius: "$full",
    border: "2px solid $green100",
  },
});

export const ReviewBox = styled("div", {
  width: "35rem",
  height: "9.5rem",
  marginTop: "2rem",
  margin: "2rem 1.5rem 1.5rem 1.5rem",
  display: "flex",
});

export const ReviewCard = styled("div", {
  paddingLeft: "1.25rem",

  width: "100%",

  height: 44,

  section: {
    fontWeight: "bold",
    color: "$gray100",
    paddingBottom: 5,
    fontSize: 16,
  },
  div: {
    color: "$gray400",
    fontSize: 14,
    fontFamily: "$default",
  },
});

export const Review = styled("p", {
  marginTop: "0.75rem",
  color: "$gray400",
  fontFamily: "$default",
  wordBreak: "break-word",
  overflow: "hidden",
  lineHeight: "$base",
  fontSize: 14,
  maxHeight: 110,
});
