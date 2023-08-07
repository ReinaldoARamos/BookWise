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

