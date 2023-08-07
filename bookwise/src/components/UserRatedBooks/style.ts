import { styled } from "../../../stiches.config";

export const UserReviewContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  width: "39rem",
  height: "100%",
  Maxheight: "22.5rem",
  backgroundColor: "$gray700",
  borderRadius: 8,
  marginTop: "1rem",
  marginBottom: "1.5rem",

  ".ReviewArea": {
    marginTop: "1.5rem",
  },
});

export const UserBookListCardContainer = styled("div", {
  display: "flex",
});

export const UserBookListCardContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "100%",
  marginLeft: "1.5rem",
  div: {
    fontSize: 18,
    color: "$gray100",
    fontWeight: "bold",
  },
  p: {
    fontSize: 14,
    color: "$gray400",

    div: {
      marginTop: "0.5rem",
      color: "$gray400",
      fontSize: "$md",
    },
    svg: {
      color: "$purple100",
      marginLeft: 4,
    },
  },
});
