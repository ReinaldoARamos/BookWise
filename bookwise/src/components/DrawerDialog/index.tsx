import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Heading } from "@ignite-ui/react";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  BookDetailsWrapper,
  BookContent,
  BookDetailsContainer,
  BookImage,
} from "./style";
import { X, BookmarkSimple, BookOpen } from "phosphor-react";
import { categories } from "../../../prisma/constants/categories";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";
interface DrawerDialogProps {
  children: ReactNode;
  bookId   : string 
}

interface Teste {
  name: string | undefined;
  cover_url: string;
  id: string ;
  author: string;
}
export function DrawerDialog({ children , bookId}: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<Teste>();


    
  async function fetchData() {
    const response = await api.get(`books/bookinfo/${bookId}`);
    setBookDrawer(response.data);
  
  }


  useEffect(() => {
    fetchData();
    console.log("id " + bookId)
  }, [bookId]);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <div>{BookDrawer?.name}</div>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
