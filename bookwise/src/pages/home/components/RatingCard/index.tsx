import { Avatar } from "@ignite-ui/react";
import { Star } from "phosphor-react";
import {
  AvaliationBox,
  ProfileBox,
  Profile,
  ReviewBox,
  ReviewCard,
  Review,
} from "./style";
import Image from "next/image";
import BookExample1 from "../../../../../public/Books/fragmentos-do-horror.png";

export function RatingCard() {
  const AvatarExample =
    "https://i0.wp.com/superdragonball.com.br/wp-content/uploads/2020/12/Por-que-Goku-nao-chamou-Paikuhan-para-o-Torneio-de-Poder.jpg?fit=1280%2C720&ssl=1";

  return (
    <AvaliationBox>
      <ProfileBox>
        <Profile>
          <Avatar src={AvatarExample} />
          <section>
            Paikuhan solador
            <div>Hoje</div>
          </section>
        </Profile>

        <div>
          <Star weight="fill" color="#8381D9" />
          <Star weight="fill" color="#8381D9" />
          <Star weight="fill" color="#8381D9" />
          <Star weight="fill" color="#8381D9" />
          <Star />
        </div>
      </ProfileBox>

      <ReviewBox>
        <Image src={BookExample1} width={108} height={152} alt="" />
        <ReviewCard>
          <section>Fragmentos de Horror</section>
          <div>Junji Ito</div>
          <Review>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At
            dignissimos sint quis? Maxime tempore commodi nihil quis eos rerum!
            Rem enim voluptate ipsa officiis itaque recusandae quas maxime...
          </Review>
        </ReviewCard>
      </ReviewBox>
    </AvaliationBox>
  );
}
