import { PageHeader } from "../Header";
import { RatingCard } from "../RatingCard";
import { LatestBooksContainer } from "./style";

export function LatestRatedBooks() {
  return (
    <LatestBooksContainer>
      <PageHeader isHome={true} />
      <section>Avaliações mais recentes</section>

      <RatingCard />
      <RatingCard />
      <RatingCard />
      <RatingCard />
      <RatingCard />
      
    </LatestBooksContainer>
    
  );
}
