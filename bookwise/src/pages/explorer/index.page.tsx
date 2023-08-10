import {
  BookListCardContainer,
  BookListCardContent,
  BookListContainer,
  ExplorerContainer,
  GeneralTabButton,
  HeaderContainer,
  TagContainer,
} from "./style";
import { NextSeo } from "next-seo";
import { Binoculars, MagnifyingGlass } from "phosphor-react";
import { api } from "@/lib/axios";
import { useState, useEffect } from "react";

import { DrawerDialog } from "@/components/DrawerDialog";
import { RatedStars } from "@/components/RatedStars";
import { useQuery } from "@tanstack/react-query";

interface BookTags {
  id: string;
  name: string;
}

interface ExplorerProps {
  id: string;
  name: string;
  author: string;
  summary: string;
  cover_url: string;
  avgRating: number;
  categories: [
    categorie: {
      category: {
        name: string;
      };
    }
  ];
}
[];

export default function Explorer() {
  const [bookTags, setBookTags] = useState<BookTags[]>([]);
  const [explorerBooks, setExplorerBooks] = useState<ExplorerProps[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("Todos");
  const [Division, setDivision] = useState<number>();
  const [bookId, setBookId] = useState<string | null>(
    "a7c2a5e9-fcb5-4f40-94b0-9f5ce2f906eb"
  );

  function handleBookId(name: string) {
    const handleBook = name;
    setBookId(handleBook);
    console.log(handleBook);
  }

  const { isLoading, error, data } = useQuery<ExplorerProps[]>({
    queryKey: ["ExplorerBooks"],
    queryFn: async () => {
      const response = await api.get("books/explorer");
      return response.data;
    },
  });

  const Tags = useQuery<BookTags[]>({
    queryKey: ["Teste"],
    queryFn: async () => {
      const responseTag = await api.get("books/category");
      return responseTag.data;
    },
  });

  if (isLoading) return "Loading...";

  function HandleFilter(name: string) {
    const FilterName = name;
    setCurrentCategory(FilterName);
    console.log(FilterName);
  }

  const filteredList = data?.filter((obj) =>
    obj.categories
      .map((category) => category.category.name)
      .includes(currentCategory)
  );
  return (
    <>
      <NextSeo title="Explorar | BookWise" description="Página de Exploração" />

      <ExplorerContainer>
        <HeaderContainer>
          <header>
            <div>
              <Binoculars />
              Explorar
            </div>

            <section>
              <input placeholder="Procure um livro" />
              <MagnifyingGlass />
            </section>
          </header>
        </HeaderContainer>
        <TagContainer>
          {Tags.data?.map((tag) => (
            <>
              <GeneralTabButton onClick={() => HandleFilter(tag.name)}>
                {tag.name}
              </GeneralTabButton>
            </>
          ))}
        </TagContainer>

        <>
          <DrawerDialog bookId={bookId}>
            <BookListContainer>
              <>
                {currentCategory == "Todos"
                  ? data?.map((item) => (
                      <BookListCardContainer
                        key={item.id}
                        onClick={() => {
                          handleBookId(item.id);
                        }}
                      >
                        <img
                          src={item.cover_url}
                          alt=""
                          width={108}
                          height={152}
                        />

                        <BookListCardContent>
                          <section>
                            {item.name.length > 30 ? (
                              <section>
                                {" "}
                                {item.name.replace(
                                  item.name.slice(25, 50),
                                  "..."
                                )}
                              </section>
                            ) : (
                              <section>{item.name}</section>
                            )}
                            <div>{item.author}</div>
                          </section>

                          <RatedStars
                            width={14}
                            fillNumber={Math.floor(item.avgRating)}
                            size={5}
                          />
                        </BookListCardContent>
                      </BookListCardContainer>
                    ))
                  : filteredList?.map((item) => (
                      <>
                        <BookListCardContainer
                          key={item.id}
                          onClick={() => {
                            handleBookId(item.id);
                          }}
                        >
                          <img
                            src={item.cover_url}
                            alt=""
                            width={108}
                            height={152}
                          />

                          <BookListCardContent>
                            <section>
                              {item.name}
                              <div>{item.author}</div>
                            </section>

                            <p>
                              <RatedStars
                                width={14}
                                fillNumber={Math.floor(item.avgRating)}
                                size={5}
                              />
                            </p>
                          </BookListCardContent>
                        </BookListCardContainer>
                      </>
                    ))}
              </>
            </BookListContainer>
          </DrawerDialog>
        </>
      </ExplorerContainer>
    </>
  );
}