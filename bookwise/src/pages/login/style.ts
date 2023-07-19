import { styled } from "../../../stiches.config";

export const LogoContainer = styled("main", {
  display: "grid",
  gridTemplateColumns: "1.1fr 1fr",
  padding: "$4",
  minHeight: "100vh",
});

export const LogoSection = styled("section", {
  width: "100%",
  height: "100%",
  background: "url(/images/logo-section-bg.png) no-repeat center",
  backgroundSize: "cover",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 10,
});

export const WellcomeContainer = styled("section", {
  width: "100%",
  maxWidth: "372px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  paddingLeft: 20,

  h2: {
    color: "$gray100",
  },
  p: {
    color: "$gray200",
    marginBottom: '$8'
  },

  
});
