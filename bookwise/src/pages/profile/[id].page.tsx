"use client";

import { SideBar } from "@/components/SideBar";
import { ProfileContainer } from "./style";
import { ProfileCard } from "./components/ProfileCard";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export interface ProfileProps {
  id: string;
  name: string | undefined ;
  avatar_url: string | undefined ;
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
export default function Profile() {
  const [isClient, setIsClient] = useState(false);

  //------------------------------------------------

  const { query } = useRouter();
  const [data, setData] = useState<ProfileProps>();

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
    setIsClient(true);
    fetchData();
  }, []);

  const totalSum = data?.ratings.reduce((accumulator, currentValue) => accumulator + currentValue.book.total_pages, 0);

console.log(totalSum); // Output: 35

const Authors = data?.ratings.length 



  //------------------------------------------------
  const { isFallback } = useRouter();
  const teste = data?.ratings
  if (isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <><NextSeo title={`Bookwise | ${data?.name}`} description="availabiluty set" /><ProfileContainer>
      {isClient ? (
        <>
          <SideBar />

          <ProfileCard />
          <UserInfo key={data?.id} name={data?.name} avatar_url={data?.avatar_url} created_at={data?.created_at} total_pages={totalSum} authorsRead={Authors}  />
        </>

      ) : (
        "notGood"
      )}
    </ProfileContainer></>
  );
}