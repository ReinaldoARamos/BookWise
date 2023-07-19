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
 name: string;
 author: string;
 cover_url: string;
}
export function PopularBooksCard() {
  const [popularBooks, setPopularBooks] = useState<PopularBooksProps[]>([]);

  async function fetchData() {
    const response = await api.get("books/popular");
    console.log(response.data);
    setPopularBooks(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
  {popularBooks.map((item) => (
     <PopularBookContainer>
     <Image src={item.cover_url} alt="" width={64} height={94} />
  <PopularBookContent>
    <section>
      {item.name}
      <div>{item.author}</div>
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
    ))}
    
  </div>
 
  );
}
