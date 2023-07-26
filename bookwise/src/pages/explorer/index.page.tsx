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
  async function fetchData() {
    const responseTag = await api.get("books/category");
    const response = await api.get("books/explorer");
    setExplorerBooks(response.data);
    setBookTags(responseTag.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function Teste(name: string) {
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
              <GeneralTabButton onClick={() => Teste(tag.name)}>
                {tag.name}
              </GeneralTabButton>
            </>
          ))}
        </TagContainer>
        <BookListContainer>
          <>
            {currentCategory == "Todos"
              ? explorerBooks.map((item) => (
                <DrawerDialog>
                  <BookListCardContainer key={item.id}>
                    <img src={item.cover_url} alt="" width={108} height={152} />

                    <BookListCardContent>
                      <section>
                        {item.name}
                        <div>{item.author}</div>
                        {item.categories.map((items) => (
                          <div>{items.category.name.split(",")}</div>
                        ))}
                      </section>

                      <p>
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} />
                      </p>
                    </BookListCardContent>
                  </BookListCardContainer>
                  </DrawerDialog>
                ))
              : filteredList.map((item) => (
                  <>
                  
                      <BookListCardContainer key={item.id}>
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
                            {item.categories.map((items) => (
                              <div>{items.category.name.split(",")}</div>
                            ))}
                          </section>

                          <p>
                            <Star size={20} weight="fill" />
                            <Star size={20} weight="fill" />
                            <Star size={20} weight="fill" />
                            <Star size={20} weight="fill" />
                            <Star size={20} />
                          </p>
                        </BookListCardContent>
                      </BookListCardContainer>
                   
                  
                  </>
                ))}
          </>
        </BookListContainer>
      </ExplorerContainer>
    </>
  );
}
