import { styled } from "@ignite-ui/react";

export const SideBarContainer = styled("div", {
  padding: "$4",
  minHeight: "100vh",
});

export const Teste = styled("div", {
  display: "none",
});
export const SideBarSection = styled("div", {
  width: "14.5rem",
  height: "100%",
  position: "fixed",
  paddingBottom: "$6",
  background: "url(/images/sidebar-bg.png) no-repeat center",
  backgroundSize: "cover",
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  ".Logo": {
    width: "100%",

    marginTop: "$12",
  },
});

export const SideBarItems = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  marginTop: "1.5rem",
  paddingBottom: 400,
  gap: "$3",

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

export const HomeButton = styled(GeneralButtonHomeStyle, {});

export const ExploreButton = styled(GeneralButtonHomeStyle, {
  width: 100,
  marginLeft: 10,

  svg: {
    marginLeft: 10,
  },
});

export const ProfileButton = styled(GeneralButtonHomeStyle, {});

export const LoginOrSingInContainer = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "$default",
  color: "$gray200",
  transition: "0.2s",

  div: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    "&:hover": {
      cursor: "pointer",
      color: "$gray100",

      svg: {
        color: "$gray100",
      },
    },
    svg: {
      color: "$green100",
      transition: "0.2s",
    },
  },
});

export const LogoutDiv = styled("span", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: 12,
  ".Avatar": {
    width: 32,
    height: 32,
    borderRadius: "$full",
    border: "2px solid $green100",
  },

  svg: {
    color: "red",
    transition: "0.2s",
    "&:hover": {
      cursor: "pointer",
      color: "DarkRed",
    },
  },
});