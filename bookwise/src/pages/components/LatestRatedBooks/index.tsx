import { Avatar, Text } from "@ignite-ui/react";
import { PageHeader } from "../Header";
import {
  AvaliationBox,
  LatestBooksContainer,
  Profile,
  ProfileBox,
} from "./style";
import { Star } from "phosphor-react";
export function LatestRatedBooks() {
  return (
    <LatestBooksContainer>
      <PageHeader isHome={true} />
      <section>Avaliações mais recentes</section>

      <AvaliationBox>
        <ProfileBox>
          <Profile>
            <Avatar />
            <section>
              Jackson Santos
              <div>Hoje</div>
            </section>
          </Profile>

          <div>
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </ProfileBox>
      </AvaliationBox>
    </LatestBooksContainer>
  );
}
