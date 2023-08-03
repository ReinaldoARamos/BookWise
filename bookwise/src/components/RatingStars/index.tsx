import { Star } from "phosphor-react";
import { StarContainer } from "./style";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
interface RatingStarsProps {
  size: number;
}

export const IconArray = ({ size }: RatingStarsProps) => {
 
    const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const iconArray = Array.from({ length: size }, (_, index) => index); 

  const handleMouseOver = (index: number) => {
    setHoverIndex(index + 1);
  };
    return (
      <StarContainer>
          {iconArray.map((_, index) => (
        <Star
          key={index}
          size={24}
          onMouseEnter={() => handleMouseOver(index)}
          onMouseLeave={() => handleMouseOver(-1)}
          weight={(index + 1) <= hoverIndex ? "fill" : "regular"}
          
        />
      ))}
      </StarContainer>
    );
  
};
