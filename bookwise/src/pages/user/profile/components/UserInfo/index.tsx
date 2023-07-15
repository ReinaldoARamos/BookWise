import Image from "next/image";
import { ProfileDisplay, UserInfoContainer } from "./style";
const AvatarExample =
  "https://i0.wp.com/superdragonball.com.br/wp-content/uploads/2020/12/Por-que-Goku-nao-chamou-Paikuhan-para-o-Torneio-de-Poder.jpg?fit=1280%2C720&ssl=1";
export function UserInfo() {
  return (
    <UserInfoContainer>
      <ProfileDisplay>
        <img src={AvatarExample} width={72} height={72} alt="" />

        <div>
          <section>Paikuhan Solador</section>
          <p>membro desde 2023</p>
        </div>
      </ProfileDisplay>
    </UserInfoContainer>
  );
}
