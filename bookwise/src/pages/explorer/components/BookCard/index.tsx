import { Binoculars, MagnifyingGlass } from "phosphor-react";

import { BookTags } from "../BookTags";
import { BookCardContainer, BookListContainer, HeaderContainer } from "./style";
import { BookListCard } from "../BookListCard";

export function BookCard() {
  return (
    <BookCardContainer>
      <HeaderContainer>
        <header>
          <div>
            <Binoculars />
            Explorar
          </div>
          <section>
            <input placeholder="Procure um livro" />
            <MagnifyingGlass />
          </section>
        </header>
      </HeaderContainer>
      <BookTags />
      <BookListContainer>
        <BookListCard />
      </BookListContainer>
    </BookCardContainer>
  );
}
