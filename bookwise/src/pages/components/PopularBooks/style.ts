import { Backpack } from "phosphor-react";
import { styled } from "../../../../stiches.config";

export const PopularContainer = styled("div", {
    paddingTop: "6.85rem",
    
    width: '20.25rem',
   
  header: {
    width: '20.25rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: "$default",
    color: "$gray100",
    fontWeight: "$regular",
    fontSize: '$md',
    marginBottom: "2rem",
    div: {
      fontWeight: "$bold",
      color: '$purple100'
    }
  },
  


});


export const PopularBookContainer = styled("div", {
  width: '20.25rem',
  height: '8.125rem',
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

export const PopularBookContent = styled('div', {
  display:'flex',
  flexDirection: 'column',

  justifyContent: 'space-between',
  width: '100%',
  marginLeft: '1rem',

  p: {
    svg: {
      color: '$purple100'
    }
  }
})