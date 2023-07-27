import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, DialogContent, DialogClose } from "./style";
import { X } from "phosphor-react";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface DrawerDialogProps {
  children: ReactNode;
  bookId: string | null;
}

interface Teste {
  name: string | undefined;
  cover_url: string;
  id: string;
  author: string;
}

export function DrawerDialog({ children, bookId }: DrawerDialogProps) {



  const [BookDrawer, setBookDrawer] = useState<Teste | null | undefined>();
  const [open, setOpen] = useState(false);

  async function fetchData() {
    const response = await api.get(`books/${bookId}`);
    setBookDrawer(response.data);
  }

  function ClearState() {
    setBookDrawer(null);
    setOpen(false);

    console.log("estado limpo ");
  }

  useEffect(() => {
    fetchData();
  }, [bookId]);

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
      <Dialog.Portal >
        <DialogOverlay onClick={() => {ClearState(), setOpen(false)}}/>
        <DialogContent >
          <DialogClose>
            <X
              size={24}
              onClick={() => {
                ClearState();
              }}
            />
          </DialogClose>
          <div>{BookDrawer?.name}</div>
          <div>{BookDrawer?.author}</div>
          <img src={BookDrawer?.cover_url}></img>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/*

import React, { ReactNode, useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { DialogOverlay, DialogContent, DialogClose } from "./style";
import { X } from "phosphor-react";
import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";

interface DrawerDialogProps {
  children: ReactNode;
  bookId: string;
}

interface Teste {
  name: string | undefined;
  cover_url: string;
  id: string;
  author: string;
}

export function DrawerDialog({ children, bookId }: DrawerDialogProps) {
  const [BookDrawer, setBookDrawer] = useState<Teste>();

  const { data } = useQuery<Teste>(["BookId"], async () => {
    const { data } = await api.get(`books/bookinfo/${bookId}`);
    setBookDrawer(data);
    return data;
  });

  console.log(data);
  // const response = await api.get(`books/bookinfo/${bookId}`);

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


* */
