import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/images/books/o-hobbit.png";
import Image from "next/image";

import { PopularBookContainer, PopularBookContent } from "./style";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

interface PopularBooksProps {
  id: string;
  rate: number;
  description: string;
  created_at: string;
  book_id: string;
  user_id: string;
  book: {
    name: string;
    author: string;
    summary: string;
    cover_url: string;
  };
}
export function PopularBooksCard() {
  const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>([]);

  async function fetchData() {
    const response = await api.get("user/home");
    setPopularBooks(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <PopularBookContainer>
      <Image src={BookExample} alt="" width={64} height={94} />
      <PopularBookContent>
        <section>
          {popularBooks.}
          <div>J. R. R. Tolkien</div>
        </section>

        <p>
          <Star size={14} weight="fill" />
          <Star size={14} weight="fill" />
          <Star size={14} weight="fill" />
          <Star size={14} weight="fill" />
          <Star size={14} />
        </p>
      </PopularBookContent>
    </PopularBookContainer>
  );
}
