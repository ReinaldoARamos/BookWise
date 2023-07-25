import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/images/books/o-hobbit.png";
import Image from "next/image";
import { BookListCardContainer, BookListCardContent } from "./style";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface ExplorerProps {
  id: string;

  name: string;
  author: string;
  summary: string;
  cover_url: string;
}

export function BookListCard() {
  const [explorerBooks, setExplorerBooks] = useState<ExplorerProps[]>([]);

  async function fetchData() {
    const response = await api.get("books/explorer");
    console.log(response.data);
    setExplorerBooks(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <>
      {explorerBooks.map((item) => (
        <BookListCardContainer>
          <Image src={item.cover_url} alt="" width={108} height={152} />

          <BookListCardContent>
            <section>
              {item.name}
              <div>{item.author}</div>
            </section>

            <p>
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} />
            </p>
          </BookListCardContent>
        </BookListCardContainer>
      ))}
    </>
  );
}

/*
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
* */
