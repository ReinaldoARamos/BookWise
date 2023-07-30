import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  BookDetailsWrapper,
  BookDetailsContainer,
  BookContent,
  BookImage,
  BookInfo,
  CategoryBox,
  TotalPagesBox,
  RatingHeader,
} from "./style";
import { Star, X } from "phosphor-react";
import { api } from "@/lib/axios";
import { BookmarkSimple, BookOpen } from "phosphor-react";
interface DrawerDialogProps {
  children: ReactNode;
  bookId: string | null;
}

interface Teste {
  name: string | undefined;
  cover_url: string;
  id: string;
  author: string;
  total_pages: number;
  categories: [
    categorie: {
      category: {
        name: string;
        books: [
          booksList: {
            book: {
              name: string;
            };
          }
        ];
      };
    }
  ];

  ratings: [
    rating: {
      id: string;
    }
  ];
}

export function DrawerDialog({ children, bookId }: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<Teste | null>();
  const [open, setOpen] = useState(false);
  const [teste, setTeste] = useState<boolean>();
  async function fetchData() {
    const response = await api.get(`books/${bookId}`);

    setBookDrawer(response.data);
    console.log(
      BookDrawer?.categories.map((item) =>
        item.category.name.split(",").join(",")
      )
    );
  }

  function ClearState() {
    setOpen(false);
    setTeste(false);
    console.log("estado limpo");
  }
  function Open() {
    setOpen(true);

    setTimeout(() => {
      setTeste(true);
    }, 200);

    console.log("estado limpo");
  }

  useEffect(() => {
    fetchData();
  }, [bookId, setOpen]);
  const categories = BookDrawer?.categories
    ?.map((item) => item?.category?.name)
    ?.join(", ");

  const RatingNumber = BookDrawer?.ratings.length;
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger
        asChild
        onClick={() => {
          Open();
        }}
      >
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay
          onClick={() => {
            ClearState();
          }}
        />
        <DialogContent>
          <DialogClose>
            <X
              size={24}
              onClick={() => {
                ClearState();
              }}
            />
          </DialogClose>
          {teste == false ? (
            <>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage
                    src={
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                    }
                    width={171}
                    height={242}
                  />
                  <BookContent>
                    <h1>
                      Loading...
                      <p>Loading...</p>
                    </h1>

                    <p>
                      <div>
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} />
                      </div>
                      <span>Loading... avaliações</span>
                    </p>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfo>
                  <CategoryBox>
                    <BookmarkSimple size={24} />
                    <div>
                      <span>Categoria</span>
                      <p>Loading...</p>
                    </div>
                  </CategoryBox>
                  <TotalPagesBox>
                    <BookOpen size={24} />
                    <div>
                      <span>Páginas</span>
                      <p>Loading...</p>
                    </div>
                  </TotalPagesBox>
                </BookInfo>
              </BookDetailsWrapper>
              <RatingHeader>
                <div>Avaliações</div>
                <button>Avaliar</button>
              </RatingHeader>
            </>
          ) : (
            <div>
              <BookDetailsWrapper>
                <BookDetailsContainer>
                  <BookImage src={BookDrawer?.cover_url} />
                  <BookContent>
                    <h1>
                      {BookDrawer?.name}
                      <p>{BookDrawer?.author}</p>
                    </h1>

                    <p>
                      <div>
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} weight="fill" />
                        <Star size={20} />
                      </div>
                      <span>{RatingNumber} avaliações</span>
                    </p>
                  </BookContent>
                </BookDetailsContainer>
                <BookInfo>
                  <CategoryBox>
                    <BookmarkSimple size={24} />
                    <div>
                      <span>Categoria</span>
                      <p>{categories}</p>
                    </div>
                  </CategoryBox>
                  <TotalPagesBox>
                    <BookOpen size={24} />
                    <div>
                      <span>Páginas</span>
                      <p>{BookDrawer?.total_pages}</p>
                    </div>
                  </TotalPagesBox>
                </BookInfo>
              </BookDetailsWrapper>
              <RatingHeader>
                <div>Avaliações</div>
                <button>Avaliar</button>
              </RatingHeader>
            </div>
          )}
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/*
  <BookDetailsWrapper>
            <BookDetailsContainer>
              <BookImage src={BookDrawer?.cover_url} />
              <BookContent>
                <h1>
                  {BookDrawer?.name}
                  <p>{BookDrawer?.author}</p>
                </h1>

                <p>
                  <div>
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} />
                  </div>
                  <span>{RatingNumber} avaliações</span>
                </p>
              </BookContent>
            </BookDetailsContainer>
            <BookInfo>
              <CategoryBox>
                <BookmarkSimple  size={24}/>
                <div>
                  <span>Categoria</span>
                  <p>{categories}</p>
                </div>
              </CategoryBox>
              <TotalPagesBox>
                <BookOpen  size={24}/>
                <div>
                  <span>Páginas</span>
                  <p>{BookDrawer?.total_pages}</p>
                </div>
              </TotalPagesBox>
            </BookInfo>
          </BookDetailsWrapper>

          <RatingHeader>
            <div>Avaliações</div>
            <button>Avaliar</button>
            </RatingHeader>
* */
