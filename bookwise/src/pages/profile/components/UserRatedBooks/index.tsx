import { Star } from "phosphor-react";
import {
  UserBookListCardContainer,
  UserBookListCardContent,
  UserReviewContainer,
} from "./style";

import BookExample from "../../../../../../public/images/books/codigo-limpo.png";
import Image from "next/image";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { ProfileProps } from "../../[id].page";
import { relativeDateFormatter } from "@/utils/dayformatter";
import { ProfileHeader } from "../ProfileHeader";

export interface UserReviewCardPRops {
  id: string;
  name: string | undefined;
  avatar_url: string | undefined;
  created_at: string;

  ratings: [
    books: {
      book: {
        id: string;
        name: string;
        author: string;
        cover_url: string;
        total_pages: number;
        created_at: string;
        summary: string
      };
    }
  ];
}


export function UserRatedBooks() {
  const { query } = useRouter();
  const [data, setData] = useState<UserReviewCardPRops>();
  const format = relativeDateFormatter
  const fetchData = async () => {
    try {
      // Build the API endpoint URL with the query parameter from the URL

      // Make the API request using Axios
      const response = await api.get(`/profile/${query.id}`);

      // Set the fetched data in the state
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

 

  return (
    <>

      {data?.ratings.map((item) => (
        <>
  
          <section>{format(item.book.created_at)}</section>
          <UserReviewContainer>
            <UserBookListCardContainer>
              <Image src={item.book.cover_url} alt="" width={108} height={152} />
              <UserBookListCardContent>
                <div>
                  {item.book.name}
                  <p>  {item.book.author}</p>
                </div>

                <p>
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} />
                </p>
              </UserBookListCardContent>
            </UserBookListCardContainer>

            <div className="ReviewArea">
            {item.book.summary}
            </div>
          </UserReviewContainer>
        </>
      ))}
    </>
  );
}

/*
   <section>Há 2 dias</section>
    <UserReviewContainer>
      <UserBookListCardContainer>
        <Image src={BookExample} alt="" width={108} height={152} />
        <UserBookListCardContent>
          <div>
        asd
            <p>Aditya Bhargava</p>
          </div>

          <p>
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} weight="fill" />
            <Star size={18} />
          </p>
        </UserBookListCardContent>
      </UserBookListCardContainer>

      <div className="ReviewArea">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
        dolore doloremque nostrum illum, quasi numquam exercitationem quis optio
        recusandae, odit ducimus minima suscipit porro magnam? Accusamus,
        tenetur voluptatem? Quos, nam! Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Officiis, dolore doloremque nostrum illum, quasi
        numquam exercitationem quis optio recusandae, odit ducimus minima
        suscipit porro magnam? Accusamus, tenetur voluptatem? Quos, nam!
      </div>
    </UserReviewContainer>
* */
