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
import { relativeDateFormatter } from "@/utils/dayformatter";
import { ProfileHeader } from "../ProfileHeader";
import { RatedStars } from "../RatedStars";

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
        rate: number;
        total_pages: number;
      
        summary: string;
        description: string;
      };
      rate: number;
      description: string;
      created_at: string;
    },
  ];
}

export function UserRatedBooks() {
  const { query } = useRouter();
  const [data, setData] = useState<UserReviewCardPRops>();
  const format = relativeDateFormatter;
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
          <section>{format(item.created_at)}</section>
          <UserReviewContainer>
            <UserBookListCardContainer>
              <Image
                src={item.book.cover_url}
                alt=""
                width={108}
                height={152}
              />
              <UserBookListCardContent>
                <div>
                  {item.book.name}
                  <p> {item.book.author}</p>
                </div>

                <p>
                  <RatedStars size={5} fillNumber={item.rate} />
                </p>
              </UserBookListCardContent>
            </UserBookListCardContainer>

            <div className="ReviewArea">{item.description}</div>
          </UserReviewContainer>
        </>
      ))}
    </>
  );
}

/*

  <p>
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} weight="fill" />
                  <Star size={18} />
                </p>
* */
