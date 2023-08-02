import { styled } from "../../../stiches.config";
export const UserInfoContainer = styled("div", {
  display: "flex",
  
  width: "100%",
  height: "100%",
  flexDirection: "column",
  marginLeft: "9rem",
 borderHeight: 10,
  paddingTop: "4.5rem",
  position: 'fixed',
 
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
    marginBottom: "2rem",

    p: {
      color: "$gray400",
      fontFamily: "$default",
      fontSize: "$xs",
      fontWeight: "$bold",
    },
  },
});

export const Divisor = styled("div", {
  width:32,
  height: "1rem",
  marginBottom: "2rem",
 display: "flex",
 alignItems: "center",
 justifyContent: "center",
 background: "url(/image/Rectangle.png) no-repeat center",
  
});

export const UserInfos = styled("div", {
  padding: "1.25rem 3.5rem 3.5 1.25rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "2.5rem",

  div: {
    width: "196px",
    display: "flex",
    alignItems: "center",

    section: {
      color: "$gray100",
      fontFamily: "$default",
      fontSize: "$md",

      p: {
        color: "$gray300",
        fontSize: "$sm",

      }
    },

    svg: {
      marginRight: "1.25rem",
      color: "$green100",
    },
  },
});
