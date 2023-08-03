import { styled } from "../../../stiches.config";


interface StarProps {
    fill: string
}
export const StarContainer = styled("p", {
  svg: {
    color: "$purple100",
    weight: "",
  },

  div: {
    ".rate1": {
      "&:hover": {
        cursor: "pointer",  

      },
    },
    ".2star": {
      "&hover:": {},
    },
    ".3star": {
      "&hover:": {},
    },
    ".4star": {
      "&hover:": {},
    },
    ".5star": {
      "&hover:": {},
    },
  },
});
