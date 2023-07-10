import { styled } from "../../../../../stiches.config";

export const HeaderContainer = styled('header', {
    header: {
        marginTop: "$10",
        paddingLeft: 12,
        display: "flex",
        justifyContent: "space-between",
        width: "62.25rem",
        height: "2.125rem",
    
        div: {
          fontFamily: "$default",
          fontSize: "$2xl",
        },
    
        input: {
          width: 433,
          height: 48,
          backgroundColor: "red",
        },
      },
})