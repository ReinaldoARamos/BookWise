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
} from "./style";
import { Book, Star, X } from "phosphor-react";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { categories } from "../../../prisma/constants/categories";
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
}

export function DrawerDialog({ children, bookId }: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<Teste | null>();
  const [open, setOpen] = useState(false);

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
    setBookDrawer(null);
    setOpen(false);
    console.log("estado limpo");
  }

  useEffect(() => {
    fetchData();
  }, [bookId, setOpen]);
  const categories = BookDrawer?.categories
    ?.map((item) => item?.category?.name)
    ?.join(", ");

  console.log(categories);
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
                <div>
                  {BookDrawer?.name}
                  <p>{BookDrawer?.author}</p>
                </div>

                <p>
                  <div>
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} weight="fill" />
                    <Star size={20} />
                  </div>
                  <span>3 avaliações</span>
                </p>
              </BookContent>
            </BookDetailsContainer>
            <BookInfo>
              <CategoryBox>
                <BookmarkSimple />
                <div>
                  <span>Categoria</span>
                  <p>{categories}</p>
                </div>
              </CategoryBox>
              <TotalPagesBox>
                <BookOpen />
                <div>
                  <span>Páginas</span>
                  <p>{BookDrawer?.total_pages}</p>
                </div>
              </TotalPagesBox>
            </BookInfo>
          </BookDetailsWrapper>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
