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
  ]
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

  async function setBooleanToTrueAfterDelay(): Promise<void> {
    var TesteBoolean = false
    console.log("valor antes da async " + TesteBoolean)
    await new Promise((resolve) => setTimeout(resolve, 500));
  
    setTeste(TesteBoolean = true);
    console.log('Updated boolean value:', TesteBoolean);
  }
  
  function ClearState() {
  
    
    setOpen(false);
    console.log("estado limpo");
  }

  useEffect(() => {
    fetchData(),
    setBooleanToTrueAfterDelay()
  }, [bookId, setOpen]);
  const categories = BookDrawer?.categories
    ?.map((item) => item?.category?.name)
    ?.join(", ");

  const RatingNumber = BookDrawer?.ratings.length
  return (
    <Dialog.Root open={open}>
      <Dialog.Trigger
        asChild
        onClick={() => {
          setOpen(true);
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
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
