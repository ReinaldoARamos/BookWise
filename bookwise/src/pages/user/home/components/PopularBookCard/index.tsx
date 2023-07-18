import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/images/books/o-hobbit.jpg";
import Image from "next/image";


import { PopularBookContainer, PopularBookContent } from "./style";
export function PopularBooksCard() {
    return (
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
    )
}