import { CaretRight, Star } from "phosphor-react";
import { PopularBooksCard } from "../PopularBookCard";
import { PopularContainer } from "./style";
import Link from "next/link";

export function PopularBook() {
  return (
    <PopularContainer>
      <header>
        <section>Livros mais populares</section>

        <Link href={"/explorer"}>
          <div>
            Ver todos <CaretRight />
          </div>
        </Link>
      </header>
      <PopularBooksCard />
    </PopularContainer>
  );
}
