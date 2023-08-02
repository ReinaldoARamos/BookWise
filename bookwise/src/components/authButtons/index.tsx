import Image from "next/image";
import {
  ButtonContainer,
  GitHubButton,
  GoogleButton,
  VisitorButton,
} from "./style";
import GoogleLogo from "../../../public/images/logos_google-icon.png";
import GitHubLogo from "../../../public/images/akar-icons_github-fill.png";
import VisitorLogo from "../../../public/images/RocketLaunch.png";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import next from "next/types";
import { useEffect } from "react";

type AuthButtonsProps = {
  callbackUrl?: string;
};

export function AuthButtons({ callbackUrl = "/" }: AuthButtonsProps) {
  const router = useRouter();

  const handleSignIn = (provider?: string) => {
    if (!provider) {
      router.push("/");
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  };

  return (
    <ButtonContainer>
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
      <GitHubButton
        onClick={() => {
          handleSignIn("github");
        }}
      >
        <section>
          <Image src={GitHubLogo} alt="" />
          Entrar com GitHub
        </section>
      </GitHubButton>
      <VisitorButton
        onClick={() => {
          handleSignIn("");
        }}
      >
        <section>
          <Image src={VisitorLogo} alt="" />
          Entrar como visitante
        </section>
      </VisitorButton>
    </ButtonContainer>
  );
}
