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
import { Binoculars, MagnifyingGlass, Star } from "phosphor-react";
import { api } from "@/lib/axios";
import { useState, useEffect } from "react";

import Link from "next/link";
import { DrawerDialog } from "@/components/DrawerDialog";
import { RatedStars } from "@/components/RatedStars";


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

export default function Explorer() {
  const [bookTags, setBookTags] = useState<BookTags[]>([]);
  const [explorerBooks, setExplorerBooks] = useState<ExplorerProps[]>([]);
  const [currentCategory, setCurrentCategory] = useState<string>("Todos");
  const [Division, setDivision] = useState<number>();
  const [bookId, setBookId] = useState<string | null>(
    "0440ad7d-230e-4573-b455-84ca38b5d339"
  );

  function handleBookId(name: string) {
    const handleBook = name;
    setBookId(handleBook);
    console.log(handleBook);
  }

  async function fetchData() {
    const responseTag = await api.get("books/category");
    const response = await api.get("books/explorer");
    const teste = await api.get("books/teste");
    setExplorerBooks(response.data);
    setBookTags(responseTag.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function HandleFilter(name: string) {
    const FilterName = name;
    setCurrentCategory(FilterName);
    console.log(FilterName);
  }

  const filteredList = explorerBooks.filter((obj) =>
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
          {bookTags.map((tag) => (
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
                  ? explorerBooks.map((item) => (
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
                            fillNumber={Math.floor(item.avgRating)}
                            size={5}
                          />
                        </BookListCardContent>
                      </BookListCardContainer>
                    ))
                  : filteredList.map((item) => (
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
