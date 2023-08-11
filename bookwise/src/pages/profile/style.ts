import { styled } from "../../../stiches.config";


export const ProfileContainer = styled("section", {
  display: "grid",
  gridTemplateColumns: "auto 1fr 308px",
  gap: 64
 
});

export const ProfileCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: 64
  
})

export const UserReviewCardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2rem',
  fontFamily: '$default',
  wordBreak: 'break-word',
  fontSize: 14,
  lineHeight: '160%',
  color: '$gray300',
  section: {
      color: '$gray300',
      fontSize: '$sm',
      
  }
})

export const HeadingContainer = styled("header", {
  paddingTop: "0.75rem",


  h2: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: '0.75rem',
    fontSize: "$2xl",
    marginBottom: '$10',
  },

  svg: {
    color:  '$green100'
  },



  section: {
    width: 624,
    height: 48,
     
    borderRadius: 8,
    backgroundColor: "transparent",
    border: "1px solid $gray500",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    
    
    svg: {
      width: "3rem",
      color: "$gray500",
      transition: "0.4s",
    },
        
  

    },

    input: {
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
      border: "none",
      marginLeft: "0.5rem",
      paddingRight: '10rem',
      
      color: "$gray100",
      fontWeight: "bold",
      fontFamily: "$default",
   

    },

    ":focus": {
      outline: "none",
    },
    '&:hover': {
      '.glass': {
      color: '$gray100'
      },
    },
    
  },
);

