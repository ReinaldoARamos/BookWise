import { styled } from "../../../../stiches.config";


export const AvaliationBox = styled("div", {
    width: "38rem",
    height: "17.5rem",
    backgroundColor: "$gray700",
    marginTop: "2rem",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
  });
  
  export const ProfileBox = styled("div", {
    display: "flex",
    width: 560,
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: "$3",
    paddingTop: "$6",
    marginLeft: "0.50rem",
    alignContent: "center",
    
    div: {
     svg: {
   
    marginBottom: "1.7rem",
     }
    }
  });
  
  export const Profile = styled("div", {
    display: "flex",
  
    section: {
      justifyContent: "center",
      flexDirection: "column",
      paddingTop: "0.3rem",
      paddingLeft: "0.6rem",
      color: "$gray100",
      marginLeft: "0.2rem",
      div: {
        display: "flex",
        alignItems: "center",
        color: "$gray400",
        paddingTop: 15,
   
        
      },
  
     
    },
  })