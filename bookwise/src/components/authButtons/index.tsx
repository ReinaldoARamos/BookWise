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

export function AuthButtons() {
  const router = useRouter();
  
function HandleNextPage() {
    router.push('/home')
  }
  return (
    <ButtonContainer onClick={HandleNextPage}>
      <GoogleButton  >
        <section>
          <Image src={GoogleLogo} alt="" />
          Entrar com Google
        </section>
      </GoogleButton>
      <GitHubButton>
        <section>
          <Image src={GitHubLogo} alt="" />
          Entrar com GitHub
        </section>
      </GitHubButton>
      <VisitorButton>
        <section>
          <Image src={VisitorLogo} alt="" />
          Entrar como visitante 
        </section>
      </VisitorButton>
    </ButtonContainer>
  );
}
