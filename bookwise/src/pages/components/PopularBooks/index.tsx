import { CaretRight, Star } from "phosphor-react";
import { PopularContainer, PopularBookContent, PopularBookContainer } from "./style";
import Image from "next/image";
import BookExample from "../../../../public/Books/o-hobbit.png";

export function PopularBook() {
  
    return (
        <PopularContainer>
      <header>
        <section>Livros mais populares</section>
        <div>
          Ver todos <CaretRight />
        </div>
      </header>
      <PopularBookContainer>
        <Image src={BookExample} alt="" width={64} height={94}/>
        <PopularBookContent>
          <section>
            O Hobbit
            <div>J. R. R. Tolkien</div>
          </section>

          <p>
            <Star size={14} weight="fill" />
            <Star size={14} weight="fill" />
            <Star size={14} weight="fill" />
            <Star size={14} weight="fill" />
            <Star size={14} />
          </p>
        </PopularBookContent>
      </PopularBookContainer>
    </PopularContainer>
    )
}