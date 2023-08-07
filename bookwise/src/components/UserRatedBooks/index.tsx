import {
  UserBookListCardContainer,
  UserBookListCardContent,
  UserReviewContainer,
} from "./style";

import Image from "next/image";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { relativeDateFormatter } from "@/utils/dayformatter";
import { RatedStars } from "../RatedStars";
import { useQuery } from "@tanstack/react-query";

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
  const format = relativeDateFormatter;

  const { isLoading, error, data } = useQuery<UserReviewCardPRops>({
    queryKey: ['User'],
    queryFn: async () => {
      const response = await api.get(`/profile/${query.id}`);
      return response.data
    }
  })

  if (isLoading) return 'Loading...'

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
