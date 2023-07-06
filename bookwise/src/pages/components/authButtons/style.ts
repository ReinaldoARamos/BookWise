import { styled } from "../../../../stiches.config";

export const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: 20,

  ":hover": {
    background: "$gray500",
    cursor: "pointer",
  },
});

export const GeneralButtonStyle = styled("button", {
  width: "23.25rem",
  height: "4.5rem",
  borderRadius: 8,
  backgroundColor: "$gray600",
  boxShadow: 0,
  border: "none",
  alignItems: "center",
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed",
    section: {
      cursor: "not-allowed",
    },
  },

  section: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "$gray100",
    fontSize: "$md",
    gap: 20,
    fontWeight: '$medium',

    paddingLeft: "$6",
  },
});
export const GoogleButton = styled(GeneralButtonStyle);

export const GitHubButton = styled(GeneralButtonStyle);

export const VisitorButton = styled(GeneralButtonStyle);
