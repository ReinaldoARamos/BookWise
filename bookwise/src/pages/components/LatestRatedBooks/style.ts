import { styled } from "../../../../stiches.config";

export const LatestBooksContainer = styled("div", {
  width: 608,
  marginRight: "20rem",

  header: {
    marginBottom: '2.5rem'
  },

  section: {
    fontFamily: '$default',
    color: '$gray100',
    fontWeight:"$regular",

  }


}

);



export const AvaliationBox = styled("div", {
  width: '38rem',
  height: '17.5rem',
  backgroundColor: '$gray700',
  marginTop: '2rem',
  borderRadius: 8,
  display: 'flex',




})


export const ProfileBox = styled('div', {
  display: 'flex',
  width: 560,
  height: 65,
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingLeft: '$3',
  paddingTop: '$3',
  marginLeft: '0.50rem',
  alignContent: 'center',

})


export const Profile = styled('div', {
  display: 'flex',
 
  section: {
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: '0.3rem',
    paddingLeft: '0.6rem',
    color: '$gray300',
    div: {
      color: '$gray400',
      paddingTop: 15
    }
  }
 
  
    

})