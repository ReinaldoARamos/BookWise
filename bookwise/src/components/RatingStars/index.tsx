import { Star } from "phosphor-react";
import { StarContainer } from "./style";
import { FaRegStar } from "react-icons/fa";
import { useState } from "react";
interface RatingStarsProps {
  size: number;
  ratesNumber: (rate : Number) => void
  //setRating: (rate : number) => void
}

export const IconArray = ({ size, ratesNumber }: RatingStarsProps) => {
  const [hoverIndex, setHoverIndex] = useState<number>(-1);
  const [clickedIndex, setClickedIndex] = useState<number | null>(null);
  const iconArray = Array.from({ length: size }, (_, index) => index);

 
  const handleClick = (index: number) => {
    setClickedIndex(index);
  };

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
          onClick={() => {
           handleClick(index);
          }}
          weight={
            clickedIndex !== null
              ? index <= clickedIndex
                ? "fill"
                : "regular"
              : index + 1 <= hoverIndex
              ? "fill"
              : "regular"
          }
        />
      ))}
    </StarContainer>
  );
};

/** */
