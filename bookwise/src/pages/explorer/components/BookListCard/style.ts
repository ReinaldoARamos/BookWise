import { styled } from "../../../../../stiches.config"
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
      
      fontSize: '$md',
    div: {
      marginTop: "0.2rem",
      fontFamily: '$default',
      color: '$gray400',
      fontSize: '$xs',
  }
     
    },
  
  })
  
  export const BookListCardContent = styled('div', {
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    marginLeft: '1.5rem',
  
    p: {
      svg: {
        color: '$purple100'
      }
    }
  })