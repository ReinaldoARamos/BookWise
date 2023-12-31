import { Star } from "phosphor-react";
import { StarContainer } from "./style";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
interface RatingStarsProps {
  size: number;
  fillNumber : number;
  width: number;
}

export const RatedStars = ({ size, fillNumber  , width}: RatingStarsProps) => {
  const iconArray = Array.from({ length: size }, (_, index) => index);

  return (
    <StarContainer>
    {iconArray.map((num, index) => (
        <Star
          key={index}
          size={width}
          weight={num <= fillNumber -1 ? 'fill' : 'regular' }
        />
   
      ))}
    </StarContainer>
  );
  
};


