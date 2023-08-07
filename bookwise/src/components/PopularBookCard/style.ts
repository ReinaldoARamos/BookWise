import { styled } from "../../../stiches.config";
export const PopularBookContainer = styled("div", {
  width: "20.25rem",
  height: "8.125rem",
  backgroundColor: "$gray700",
  borderRadius: 8,
  padding: "1rem",
  display: "flex",
  marginBottom: 12,
  section: {
    fontFamily: "$default",
    color: "$gray100",
    fontWeight: "$bold",
    fontSize: "1rem",
    width: "105%",
  },
  p: {
    marginTop: "0.2rem",
    fontFamily: "$default",
    color: "$gray400",
    fontSize: "$xs",
  },
});

export const PopularBookContent = styled("div", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "space-between",
  width: "100%",
  marginLeft: "1rem",

  p: {
    svg: {
      color: "$purple100",
    },
  },
});
