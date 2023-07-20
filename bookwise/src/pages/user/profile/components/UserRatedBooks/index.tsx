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

export function UserRatedBooks() {
    
 const {query} = useRouter()
 const [data, setData] = useState([]);

 const fetchData = async () => {
  try {
    // Build the API endpoint URL with the query parameter from the URL


    // Make the API request using Axios
    const response = await api.get(`/profile/${query.id}`);

    // Set the fetched data in the state
    console.log(response.data)
    setData(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

  useEffect(() => {
   
    fetchData();
  }, []);
  return (
    <>
     <section>Há 2 dias</section>
    <UserReviewContainer>
      <UserBookListCardContainer>
        <Image src={BookExample} alt="" width={108} height={152} />
        <UserBookListCardContent>
          <p>
            Código Limpo
            <div>Aditya Bhargava</div>
          </p>

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
    </>
  );
}
