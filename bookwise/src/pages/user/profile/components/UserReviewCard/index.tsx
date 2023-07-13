import { UserRatedBooks } from "../UserRatedBooks";
import { UserReviewCardContainer } from "./style";

export function UserReviewCard() {
    return (
        <UserReviewCardContainer>
              <section>Há 2 dias</section>
              <UserRatedBooks />
              <UserRatedBooks />
              <UserRatedBooks />
        </UserReviewCardContainer>
      
    )
}