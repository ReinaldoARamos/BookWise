import { Star } from "phosphor-react";
import { StarContainer } from "./style";
import { FaRegStar } from "react-icons/fa";
interface RatingStarsProps {
  size: number;
}

export const IconArray = ({ size } : RatingStarsProps) => {
    const iconArray = Array.from({ length: size }, (_, index) => index); // Generate an array of specified size
    function HandleIndexPosition() {

    }
    return (
  <StarContainer>
        {iconArray.map((_, index) => (
          <Star key={index} size={24} onClick={() => {console.log(index + 1)}}/> // Replace "IconName" with the specific icon component you imported.
        ))}
     </StarContainer>
    );
  };

