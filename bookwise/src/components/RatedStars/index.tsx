import { Star } from "phosphor-react";
import { StarContainer } from "./style";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
interface RatingStarsProps {
  size: number;
  fillNumber : number;
}

export const RatedStars = ({ size, fillNumber  }: RatingStarsProps) => {
  const iconArray = Array.from({ length: size }, (_, index) => index);

  return (
    <StarContainer>
    {iconArray.map((num, index) => (
        <Star
          key={index}
          size={24}
          weight={num <= fillNumber -1 ? 'fill' : 'regular' }
        />
   
      ))}
    </StarContainer>
  );
  
};


