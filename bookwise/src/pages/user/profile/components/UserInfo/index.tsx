import Image from "next/image";
import { Divisor, ProfileDisplay, UserInfoContainer, UserInfos } from "./style";
import { Book, BookOpen } from "phosphor-react";
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
      <Divisor>divisor</Divisor>
      <UserInfos>
        <div>
          <BookOpen size={28} />
          <section>
            3781
            <section>Páginas Lidas</section>
          </section>
        </div>
        <div>
          <BookOpen size={28} />
          <section>
            10
            <section>Livros avaliados</section>
          </section>
        </div>
        <div>
          <BookOpen size={28} />
          <section>
            3853
            <section>Páginas lidas</section>
          </section>
        </div>
        <div>
          <BookOpen size={28} />
          <section>
            8<section>Autores lidas</section>
          </section>
        </div>
        <div>
          <BookOpen size={28} />
          <section>
            Computação
            <section>Categorias mais lidas</section>
          </section>
        </div>
      </UserInfos>
    </UserInfoContainer>
  );
}
