
import { Divisor, ProfileDisplay, UserInfoContainer, UserInfos } from "./style";
import { UserList, BookOpen, Books, BookmarkSimple } from "phosphor-react";
import { DateFormatterYear } from "@/utils/dayformatter";

interface UserInfo {
  name: string | undefined;
  avatar_url: string | undefined;
  created_at: string | undefined;
  total_pages: number | undefined;
  booksRead: number | undefined;
  authorsRead: string | undefined;
  monstReadedCategory?: string | undefined;
}

export function UserInfo({
  name,
  avatar_url,
  created_at,
  total_pages,
  authorsRead,
  booksRead,
  monstReadedCategory,
}: UserInfo) {
  const YearFormatter = DateFormatterYear;
  return (
    <>
    <UserInfoContainer>
    <div className="LeftBorder" />
        <ProfileDisplay>
       
          <img src={avatar_url} width={72} height={72} alt="" />

          <div>
            <section>{name}</section>
            <img width={32}  />  
            <p>{`membro desde ` + YearFormatter(created_at)}</p>
          
        </div>
        </ProfileDisplay>
      
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
              {booksRead}
              <p>Livros avaliados</p>
            </section>
          </div>
          <div>
            <UserList size={28} />
            <section>
              {authorsRead}
              <p>Autor Favorito</p>
            </section>
          </div>

          <div>
            <BookmarkSimple size={28} />
            <section>
              {monstReadedCategory}
              <p>Categorias mais lidas</p>
            </section>
            
          </div>
          
        </UserInfos>
  
      
    </UserInfoContainer>
    </>
  );
}
