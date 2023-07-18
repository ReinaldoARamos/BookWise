import { Avatar } from "@ignite-ui/react";
import { Star } from "phosphor-react";
import {
  AvaliationBox,
  ProfileBox,
  Profile,
  ReviewBox,
  ReviewCard,
  Review,
} from "./style";
import Image from "next/image";
import { api } from "@/lib/axios";
import { useEffect, useState } from "react";

interface RatingProps{ 
  id: string,
  rate: number,
  description: string,
  created_at: string,
  book_id: string,
  user_id: string,
  book: {
    name: string,
    author: string,
    summary: string,
    cover_url: string
  }

}

export function RatingCard() {
  const AvatarExample =
    "https://i0.wp.com/superdragonball.com.br/wp-content/uploads/2020/12/Por-que-Goku-nao-chamou-Paikuhan-para-o-Torneio-de-Poder.jpg?fit=1280%2C720&ssl=1";
    const [data, setData] = useState<RatingProps[]>([]);

  async function fetchData() {
    const response = await api.get('user/home')
    setData(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);


   
  return (
  
    <div>
  
    {data.map((item) => (
    <AvaliationBox key={item.id}>
    <ProfileBox>
      <Profile>
        <Avatar src={AvatarExample} />
        <section>
          Paikuhan solador
          <div>Hoje</div>
        </section>
      </Profile>

      <div>
        <Star weight="fill" color="#8381D9" />
        <Star weight="fill" color="#8381D9" />
        <Star weight="fill" color="#8381D9" />
        <Star weight="fill" color="#8381D9" />
        <Star />
      </div>
    </ProfileBox>

    <ReviewBox>
      <Image src={item.book.cover_url} width={108} height={152} alt="" />
      <ReviewCard>
        <section>{item.book.name}</section>
        <div>{item.book.author}</div>
        <Review>
          {item.description}
        </Review>
      </ReviewCard>
    </ReviewBox>
  </AvaliationBox>
    ))}
  </div>
 
  );
}

/*
 
* */
