import { styled } from "../../../stiches.config";
import * as Dialog from "@radix-ui/react-dialog";
export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  background: "#00000099",
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: "50%",
  fontFamily: "$default",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 518,
  height: 337,
  borderRadius: 8,
  background: "$gray700",
  boxShadow: "-4px 0px 30px 0px #00000080",
  padding: "$6 48px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
});

export const DialogClose = styled(Dialog.Close, {
  color: "$gray400",
  background: "transparent",
  border: "none",
  marginLeft: "auto",
  marginBottom: "$4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transform: "0.2s",
  "&:hover": {
    color: "$gray300",
    cursor: "pointer",
  },
});

export const ButtonContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  gap: 20,
button: {
  "&:hover": {
    background: "$gray500",
    cursor: "pointer",
  },
}
 
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
    fontWeight: "$medium",

    paddingLeft: "$6",
  },
});

export const GoogleButton = styled(GeneralButtonStyle, {});

export const GitHub = styled(GeneralButtonStyle, {});

export const LoginContainer = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  span: {
    display: "flex",
    marginBottom: 12,
    justifyContent: "center",
    alignItems: "center",
  },
});
