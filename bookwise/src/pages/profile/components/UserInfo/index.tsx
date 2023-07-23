import Image from "next/image";
import { Divisor, ProfileDisplay, UserInfoContainer, UserInfos } from "./style";
import { UserList, BookOpen, Books, BookmarkSimple } from "phosphor-react";
import { DateFormatterYear } from "@/utils/dayformatter";



const rectangle = '../../../../../../public//Rectangle.png'
const AvatarExample = "https://i0.wp.com/superdragonball.com.br/wp-content/uploads/2020/12/Por-que-Goku-nao-chamou-Paikuhan-para-o-Torneio-de-Poder.jpg?fit=1280%2C720&ssl=1";


interface UserInfo {
  name: string | undefined;
  avatar_url: string | undefined; 
  created_at: string | undefined;
  total_pages: number | undefined;
  booksRead: number | undefined;
  authorsRead: number | undefined;
  monstReadedCategory?: string  | undefined


}

export function UserInfo({name, avatar_url , created_at, total_pages, authorsRead} : UserInfo) {
    const YearFormatter = DateFormatterYear
  return (
    <UserInfoContainer>
      <div className="LeftBorder">
      <ProfileDisplay>
        <img src={avatar_url} width={72} height={72} alt="" />

        <div>
          <section>{name}</section>
          <p>{`membro desde ` + YearFormatter(created_at)}</p>
        </div>
      </ProfileDisplay>
      <Divisor>
        
      </Divisor>
      <UserInfos>
        <div>
          <BookOpen size={28} />
          <section>
            {total_pages}
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
            {authorsRead}
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
