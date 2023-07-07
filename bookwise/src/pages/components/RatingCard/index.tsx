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
import BookExample1 from "../../../../public/Books/fragmentos-do-horror.png";
import BookExample2 from "../../../../public/Books/14-habitos-de-desenvolvedores-altamente-produtivos.png";
import BookExample3 from "../../../../public/Books/historias-extraordinarias.png";
export function RatingCard() {
  const AvatarExample =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwwHDtLutJuxtY8O04noomdI703r42sKhwxecLHu5H-A&s";

  return (
    <AvaliationBox>
      <ProfileBox>
        <Profile>
          <Avatar src={AvatarExample} />
          <section>
            Kiriko Kamori
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
