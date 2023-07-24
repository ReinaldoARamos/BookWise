"use client";

import { SideBar } from "@/components/SideBar";
import { ProfileContainer } from "./style";
import { ProfileCard } from "./components/ProfileCard";
import { UserInfo } from "./components/UserInfo";
import { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { books } from "../../../prisma/constants/books";

export interface ProfileProps {
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
        summary: string;
        categories: {

        }
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

  const PagesRead = data?.ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue.book.total_pages,
    0
  );

  console.log(PagesRead); 

  const BooksRated = data?.ratings.length;
  
  const mostFrequentAuthorArray = data?.ratings

  const countOccurrences: { [key: string]: number } = {};
  mostFrequentAuthorArray?.forEach((obj) => {
    const { book } = obj;
    if (countOccurrences[book.author]) {
      countOccurrences[book.author]++;
    } else {
      countOccurrences[book.author] = 1;
    }
  });
  
  let mostFrequentAuthors: string = "";
  let maxCount = 0;
  for (const book in countOccurrences) {
    if (countOccurrences[book] > maxCount) {
      mostFrequentAuthors = book;
      maxCount = countOccurrences[book];
    }
  }
  
  console.log("Most frequent data:", mostFrequentAuthors);
  console.log("Occurrences:", maxCount);

  //------------------------------------------------
  const { isFallback } = useRouter();
  const teste = data?.ratings;
  if (isFallback) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <NextSeo
        title={`Bookwise | ${data?.name}`}
        description="availabiluty set"
      />
      <ProfileContainer>
        {isClient ? (
          <>
            <SideBar />

            <ProfileCard />
            <UserInfo
              key={data?.id}
              name={data?.name}
              avatar_url={data?.avatar_url}
              created_at={data?.created_at}
              total_pages={PagesRead}
              authorsRead={mostFrequentAuthors}
              booksRead={BooksRated}
              monstReadedCategory={"Teste"}
            />
          </>
        ) : (
          "notGood"
        )}
      </ProfileContainer>
    </>
  );
}
