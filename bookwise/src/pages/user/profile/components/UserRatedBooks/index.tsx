import { Star } from "phosphor-react";
import {
  UserBookListCardContainer,
  UserBookListCardContent,
  UserReviewContainer,
} from "./style";

import BookExample from "../../../../../../public/Books/codigo-limpo.png";
import Image from "next/image";

export function UserRatedBooks() {
  return (
    <UserReviewContainer>
      <UserBookListCardContainer>
        <Image src={BookExample} alt="" width={108} height={152} />
        <UserBookListCardContent>
          <p>
            Código Limpo
            <div>Aditya Bhargava</div>
          </p>

          <p>
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} />
          </p>
        </UserBookListCardContent>
      </UserBookListCardContainer>

      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        dolore doloremque nostrum illum, quasi numquam exercitationem quis optio
        recusandae, odit ducimus minima suscipit porro magnam? Accusamus,
        tenetur voluptatem? Quos, nam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Officiis, dolore doloremque nostrum illum, quasi
        numquam exercitationem quis optio recusandae, odit ducimus minima
        suscipit porro magnam? Accusamus, tenetur voluptatem? Quos, nam!
      </div>
    </UserReviewContainer>
  );
}
