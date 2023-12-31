import { styled } from "../../../stiches.config";
import * as Dialog from "@radix-ui/react-dialog";
export const DialogOverlay = styled(Dialog.Overlay, {
  position: "fixed",
  inset: 0,
  background: "#00000099",
});

export const DialogContent = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  width: 660,
  height: "100%",
  background: "$gray800",
  boxShadow: "-4px 0px 30px 0px #00000080",
  padding: "$6 48px",
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",

  "&::-webkit-scrollbar": {
    width: 6,
  },

  "&::-webkit-scrollbar-track": {
    background: "$gray700",
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray600",
  },
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

export const BookDetailsWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  background: "$gray700",
  padding: "$6 $8",
  borderRadius: "$md",
});

export const BookDetailsContainer = styled("div", {
  display: "flex",
  gap: "$8",
});

export const BookImage = styled("img", {
  borderRadius: "$md",
  objectFit: "cover",
});

export const BookContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  '.StarContainer': {
    fontFamily: '$default'
    
  },
  p: {
    display: "flex",
    color: "$gray300",
    fontSize: 16,
    fontFamily: "$default",
    marginTop: 8,
    svg: {
      color: "$purple100",
    },
   
  },

  h1: {
    color: "$gray100",
    fontSize: 18,
    fontFamily: "$default",
  },

  span: {
    color: "$gray400",
    fontSize: 14,
  },

});

export const BookInfo = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 40,
  borderTop: "1px solid $gray600",
  padding: 24,
});

export const CategoryBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  div: {
    color: "$gray400",
    fontSize: 14,
  },
  p: {
    color: "$gray200",
    fontSize: 16,
    fontFamily: "$default",
    fontWeight: "bold",
    marginTop: 4,
  },

  gap: 12,

  svg: {
    color: "$green100",
  },
});

export const TotalPagesBox = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  fontFamily: '$default',
  div: {
    color: "$gray400",
    fontSize: 14,
  },
  p: {
    color: "$gray200",
    fontSize: 16,
    fontFamily: "$default",
    fontWeight: "bold",
    marginTop: 4,
  },

  gap: 12,

  svg: {
    color: "$green100",
  },
});

export const RatingHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 48,
  fontFamily: "$default",
  div: {
    fontSize: 14,
    color: "$gray200",
  },

  button: {
    fontSize: 14,
    color: "$purple100",
    fontWeight: "bold",
    background: "transparent",
    border: "none",
    transition: "0.2s",
    "&:hover": {
      color: "$gray200",
      cursor: "pointer",
    },
  },
});

export const Ratings = styled("div", {
  display: "flex",
  marginTop: 12,
  padding: 24,
  width: 564,
  Maxheight: 178,
  background: "$gray700",
  borderRadius: 8,
  flexDirection: "column",
});

export const UserRatingHeader = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  fontFamily: "$default",

  img: {
    borderRadius: "$full",
    marginRight: 12,
  },
  div: {
    display: "flex",
  },

  svg: {
    color: "$purple100",
  },

  p: {
    div: {
      color: "$gray400",
      marginTop: 4,
    },
    span: {
      fontWeight: "bold",
    },
  },
});

export const Review = styled("p", {
  marginTop: 24,
  color: "$gray300",
  fontSize: 16,
  fontFamily: "$default",
 
  wordBreak: "break-word",
  maxHeight: 178,
});

export const ReviewTextArea = styled("form", {
  marginTop: 24,
  padding: 24,
  background: "$gray700",
  width: 564,
  height: 328,
  borderRadius: 8,
  fontFamily: "$default",
  ".RemainingChars": {
    color: "$gray400",
    display: 'flex',
    justifyContent: 'flex-end',
    fontWeight: 'bold'
  },
  ".container": {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  div: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    img: {
      borderRadius: "$full",
      marginRight: 8,
    },

    div: {
      fontSize: 16,
      color: "$gray100",
    },
  },

  textarea: {
    resize: "none",
    padding: 24,
    width: "100%",
    color: "$gray100",
    fontFamily: "$default",
    height: 164,
    border: "1px solid $gray500",
    backgroundColor: " $gray800",
    borderRadius: 8,
    "&:focus": {
      outline: "none",
    },
    "&:hover": {
      cursor: "pointer",
    },
  },

  ".ButtonsContainer": {
    marginTop: 6,
    justifyContent: "flex-end",
    gap: 8,
    borderRadius: 8,
    button: {
      width: 40,
      height: 40,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "$gray600",
      border: "none",
      transition: "0.6s",
      svg: {
        color: "$purple100",
        transition: "0.4s",
      },

      "&:hover": {
        cursor: "pointer",
        svg: {
          color: "$green100",
        },
      },

      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: "$gray600 ",
        opacity: "0.5",
      },
    },
  },
});

export const StarContainer = styled("p", {
  svg: {
    color: "$purple100",
    "&:hover": {
      cursor: "pointer",
    },
  },
});


