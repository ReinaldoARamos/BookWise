import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, green } from "@radix-ui/colors";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Heading } from "@ignite-ui/react";
import { DialogOverlay, DialogContent, DialogClose, BookDetailsWrapper, BookContent, BookDetailsContainer, BookImage } from "./style";
import { X, BookmarkSimple, BookOpen } from "phosphor-react";
import { categories } from "../../../prisma/constants/categories";


interface DrawerDialogProps {
    children: ReactNode
}
export function DrawerDialog({children} : DrawerDialogProps) {
  return (
    <Dialog.Root >
      <Dialog.Trigger asChild>
        {children}
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
      
        
        
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
