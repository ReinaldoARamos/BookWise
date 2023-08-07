"use client";

import {
  ProfileCardContainer,
  ProfileContainer,
  UserReviewCardContainer,
} from "./style";

import { useState, useEffect } from "react";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { ProfileHeader } from "@/components/ProfileHeader";
import { UserRatedBooks } from "@/components/UserRatedBooks";
import { UserInfo } from "@/components/UserInfo";
import {useQuery} from '@tanstack/react-query'

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
        summary: string;
        categories: [
          categorie: {
            category: {
              name: string;
            };
          }
        ];
      };
     
    },
   
  ];
}


export default function Profile() {
  
 async function fetchData () { 
  const response = await api.get(`/profile/${query.id}`);
   
  return response.data
 }
  const { query } = useRouter();
  

    const { isLoading, error, data } = useQuery<ProfileProps>({
      queryKey: ['User'],
      queryFn: async () => {
        const response = await api.get(`/profile/${query.id}`);
        return response.data
      }
    })

if (isLoading) return 'Loading...'


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
      
      <ProfileCardContainer>
              <ProfileHeader />
              <UserReviewCardContainer>
                <UserRatedBooks />
              </UserReviewCardContainer>

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
          
            </ProfileCardContainer>
          
     
  </>
  );
}


/*
 <>
* */








/*


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



*/