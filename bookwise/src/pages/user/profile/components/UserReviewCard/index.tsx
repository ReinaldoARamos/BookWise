import { useRouter } from "next/router";
import { UserRatedBooks } from "../UserRatedBooks";
import { UserReviewCardContainer } from "./style";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";

export function UserReviewCard() {

    
    return (
        
        <UserReviewCardContainer>

              <UserRatedBooks/>
              
           
        </UserReviewCardContainer>
      
    )
}