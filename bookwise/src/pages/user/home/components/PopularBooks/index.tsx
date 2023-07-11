import { CaretRight, Star } from "phosphor-react";
import { PopularBooksCard } from "../PopularBookCard";
import { PopularContainer } from "./style";


export function PopularBook() {
  
    return (
        <PopularContainer>
      <header>
        <section>Livros mais populares</section>
        <div>
          Ver todos <CaretRight />
        </div>
      </header>
      <PopularBooksCard />
      <PopularBooksCard />
      <PopularBooksCard />
      <PopularBooksCard />
      
      
    </PopularContainer>
    )
}