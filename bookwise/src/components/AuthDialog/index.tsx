import React, { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DialogOverlay,
  DialogContent,
  DialogClose,
  ButtonContainer,
  GoogleButton,
  LoginContainer,
} from "./style";
import { X } from "phosphor-react";
import { AuthButtons } from "../authButtons";
import { GitHubButton } from "../authButtons/style";
import GoogleLogo from "../../../public/images/logos_google-icon.png";
import GitHubLogo from "../../../public/images/akar-icons_github-fill.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

interface AuthDialogProps {
  children: ReactNode;
}

export function AuthDialog({ children }: AuthDialogProps) {
  const router = useRouter();

  const handleSignIn = (provider?: string, callbackUrl = "/explorer") => {
    if (!provider) {
      router.push("/");
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose>
            <X size={24} />
          </DialogClose>
          <LoginContainer>
            <ButtonContainer>
              <span>Faça Login para deixar sua avaliação</span>
              <GoogleButton
                onClick={() => {
                  handleSignIn("google");
                }}
              >
                <section>
                  <Image src={GoogleLogo} alt="" />
                  Entrar com Google
                </section>
              </GoogleButton>
            </ButtonContainer>
          </LoginContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

/*
  <GitHubButton  onClick={() => {
                  handleSignIn("github");
                }}>
                <section>
                  <Image src={GitHubLogo} alt="" />
                  Entrar com GitHub
                </section>
              </GitHubButton>
* */
