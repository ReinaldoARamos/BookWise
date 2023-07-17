import Image from "next/image";
import { Divisor, ProfileDisplay, UserInfoContainer, UserInfos } from "./style";
import { UserList, BookOpen, Books, BookmarkSimple } from "phosphor-react";
const rectangle = '../../../../../../public/Rectangle.png'
const AvatarExample =
  "https://i0.wp.com/superdragonball.com.br/wp-content/uploads/2020/12/Por-que-Goku-nao-chamou-Paikuhan-para-o-Torneio-de-Poder.jpg?fit=1280%2C720&ssl=1";
export function UserInfo() {
  return (
    <UserInfoContainer>
      <div className="LeftBorder">
      <ProfileDisplay>
        <img src={AvatarExample} width={72} height={72} alt="" />

        <div>
          <section>Paikuhan Solador</section>
          <p>membro desde 2023</p>
        </div>
      </ProfileDisplay>
      <Divisor>
        
      </Divisor>
      <UserInfos>
        <div>
          <BookOpen size={28} />
          <section>
            3781
            <p>Páginas Lidas</p>
          </section>
        </div>
        <div>
          <Books size={28} />
          <section>
            10
            <p>Livros avaliados</p>
          </section>
        </div>
        <div>
          <UserList size={28} />
          <section>
            3
            <p>Autores Lidos</p>
          </section>
        </div>

        <div>
          <BookmarkSimple size={28} />
          <section>
            Computação
            <p>Categorias mais lidas</p>
          </section>
        </div>
      </UserInfos>
      </div>
    </UserInfoContainer>
  );
}
