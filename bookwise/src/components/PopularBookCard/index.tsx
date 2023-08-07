import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/images/books/o-hobbit.png";
import Image from "next/image";

import { PopularBookContainer, PopularBookContent } from "./style";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { RatedStars } from "../RatedStars";

interface PopularBooksProps {
  id: string;
  avgRating: number;
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
           {item.name.length >= 31 ? 
           <section>
            {item.name.replace(item.name.slice(25, 50), "...")}
            <p>{item.author}</p>
           </section> :
            (
            <section>
              {item.name}
              <p>{item.author}</p>
              </section>
              )
              }
  
            <p>
              <RatedStars width={14} size={5} fillNumber={Math.floor(item.avgRating)} />
            </p>
          </PopularBookContent>
        </PopularBookContainer>
      ))}
    </div>
  );
}
