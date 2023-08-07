import { styled } from "../../../stiches.config";

export const ExplorerContainer = styled("section", {
  display: "flex",
  flexDirection: "column",
  width: '100%',
  height: '100%',
  marginLeft: 64
});



export const BookCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '4rem'
})


export const HeaderContainer = styled("header", {
  header: {
    marginTop: "0.75rem",

    display: "flex",
    justifyContent: "space-between",
    width: "62.25rem",
    height: "2.125rem",

    div: {
      fontFamily: "$default",
      fontSize: "$2xl",

      display: "flex",

      alignItems: "center",
      gap: "0.75rem",

      svg: {
        color: "$green100",
      },
    },

    section: {
      width: 433,
      height: 48,
      borderRadius: 8,
      backgroundColor: "transparent",
      border: "1px solid $gray500",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      ":hover": {
        cursor: "pointer",
      },
      svg: {
        width: "3rem",
        color: "$gray500",
        transition: "0.4s",
      },

      input: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        border: "none",
        marginLeft: "0.5rem",
        color: "$gray100",
        fontWeight: "bold",
        fontFamily: "$default",
      },

      ":focus": {
        outline: "none",
      },
    },
  },
});


export const BookListContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem',

})



export const BookListCardContainer = styled("div", {
  width: '20rem',
  height: '11.5rem',

  backgroundColor: '$gray700',
  borderRadius: 8,
  padding: '1rem',
  display: 'flex',

  section: {

    fontFamily: '$default',
    color: '$gray100',
    fontWeight: "$bold",
    fontSize: "1rem",
    width: "103%",
    div: {
      marginTop: "0.2rem",
      fontFamily: '$default',
      color: '$gray400',
      fontSize: '$xs',
    },


  },
  '&:hover': {
    cursor: 'pointer',
  }

})

export const BookListCardContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  marginLeft: '1.5rem',

  p: {
    
    svg: {
      color: '$purple100',
      marginLeft: 4
    }
  },





})



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
  maxWidth: '7rem',
  height: '2rem',
  border: "1px solid $purple100",
  color: "$purple100",
  borderRadius: "1rem",
  variants: {
    active: {
      ButtonActive: {

      },
    },
  },
  ":focus": {
    outline: "none",
  },
});
