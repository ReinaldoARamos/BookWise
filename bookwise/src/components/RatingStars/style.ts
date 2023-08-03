import { styled } from "../../../stiches.config";

interface StarProps {
  fill: string;
}
export const StarContainer = styled("p", {
  svg: {
    color: "$purple100",
    "&:hover": {
      cursor: "pointer",
    },
  },
});
