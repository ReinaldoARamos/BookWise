import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/Books/o-hobbit.png";
import Image from "next/image";
import { BookListCardContainer, BookListCardContent } from "./style";
import { useState } from "react";

export function BookListCard() {

  return (
    <>
    
      <BookListCardContainer>

        <Image src={BookExample} alt="" width={108} height={152} />
        
        <BookListCardContent>
          <section>
            O Hobbit
            <div>J. R. R. Tolkien</div>
          </section>

          <p>
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} weight="fill" />
            <Star size={20} />
          </p>
        </BookListCardContent>
      
      </BookListCardContainer>
    
    </>
  );
}
