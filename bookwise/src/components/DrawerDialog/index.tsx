import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
} from "./style";
import { X } from "phosphor-react";
import { api } from "@/lib/axios";
import {useQuery} from '@tanstack/react-query'




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
  }, [ bookId  ]);

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
          <div>{BookDrawer?.author}</div>
          <img src={BookDrawer?.cover_url}></img>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
