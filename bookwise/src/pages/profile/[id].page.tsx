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
        categories: [
          categorie: {
            category: {
              name: string;
            };
          }
        ];
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
      const response = await api.get(`/profile/${query.id}`);

      setData(response.data);
    } catch (error) {}
  };

  useEffect(() => {
    setIsClient(true);
    fetchData();
  }, []);

  const PagesRead = data?.ratings.reduce(
    (accumulator, currentValue) => accumulator + currentValue.book.total_pages,
    0
  );

  const BooksRated = data?.ratings.length;

  const mostFrequentAuthorsandCateroryArray = data?.ratings;

  const countOccurrences: { [key: string]: number } = {};
  mostFrequentAuthorsandCateroryArray?.forEach((obj) => {
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

  const countCategory: { [key: string]: number } = {};
  mostFrequentAuthorsandCateroryArray?.forEach((obj) => {
    const { book } = obj;
    book.categories.forEach((data) => {
      if (countCategory[data.category.name]) {
        countCategory[data.category.name]++;
      } else {
        countCategory[data.category.name] = 1;
      }
    });
  });

  let mostFrequentData: string = "";
  let maxCountCategory = 0;
  for (const name in countCategory) {
    if (countCategory[name] > maxCountCategory) {
      mostFrequentData = name;
      maxCountCategory = countCategory[name];
    }
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
              monstReadedCategory={mostFrequentData}
            />
          </>
        ) : (
          "notGood"
        )}
      </ProfileContainer>
    </>
  );
}
