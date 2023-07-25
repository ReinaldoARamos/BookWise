import { styled } from "../../../../../stiches.config";
export const TagContainer = styled("p", {
  width: "100%",
  height: "2.125rem",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  alignContent: "center",
  marginTop: "4.5rem",
  gap: "0.75rem",
  marginBottom: "2.5rem",
  ":hover": {
    transition: "0.2s",
    cursor: "pointer",
    color: "$gray100",
    border: "1px solid $gray100",
  },
});

export const GeneralTabButton = styled("button", {
    
  backgroundColor: "transparent",
  width: '100%',
  maxWidth:'7rem',
  height: '2rem',
  border: "1px solid $purple100",
  color: "$purple100",
  borderRadius: "1rem",
  variants: {
    active: {
      ButtonActive: {
        border: "1px solid $purple200",
        backgroundColor: "$purple200",
        color: "$gray100",
      },
    },
  },
  ":focus": {
    outline: "none",
  },
});

export const AllButtons = styled(GeneralTabButton, {});
