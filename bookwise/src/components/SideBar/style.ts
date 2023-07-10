import { styled } from "@ignite-ui/react";

export const SideBarContainer = styled("div", {
  padding: "$4",
  minHeight: "100vh",
});

export const SideBarSection = styled("div", {
  width: "14.5rem",
  height: "100%",
  position: "fixed",
  paddingBottom: "$4",
  background: "url(/image/sidebar-bg.png) no-repeat center",
  backgroundSize: "cover",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  img: {
    width: "100%",

    marginTop: "$12",
  },
});

export const SideBarItems = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",

  paddingBottom: 400,
  gap: "$4",

  ":hover": {
    cursor: "pointer",
    section: {
      color: "$gray100",
      transition: "0.4S",

      borderLeft: "1px solid rgba(127, 209, 204, 1)",

      svg: {
        color: "$gray100",
      },
    },
  },
});

export const GeneralButtonHomeStyle = styled("button", {
  width: 100,
  height: 42,
  backgroundColor: "transparent",
  border: "1px solid transparent",

  section: {
    display: "flex",
    justifyContent: "center",
    gap: "$4",
    alignItems: "center",
    color: "$gray400",
   
    svg: {
      color: "$gray400",
    },
   
    
  },
});

export const HomeButton = styled(GeneralButtonHomeStyle, {
  
});

export const ExploreButton = styled(GeneralButtonHomeStyle, {
  width: 110,
  marginLeft: 10,

  svg: {
    marginLeft: 10,
  },

  
});

export const LoginButton = styled(GeneralButtonHomeStyle, {
  width: "100%",
  fontWeight: "bold",
  ":hover": {
    cursor: "pointer",

    color: "$gray100",

    svg: {
      color: "$green100",
    },
  },
  div: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "$gray400",

    svg: {
      marginLeft: "$3",
      color: "$green100",
    },
  },
});
