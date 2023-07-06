import { Text } from "@ignite-ui/react";
import { PageHeader } from "../Header";
import { AvaliationBox, LatestBooksContainer } from "./style";

export function LatestRatedBooks() {
  return (
    <LatestBooksContainer>
      <PageHeader isHome={true} />
      <section>Avaliações mais recentes</section>

      
      <AvaliationBox>
        Oi
      </AvaliationBox>
    </LatestBooksContainer>
  );
}
