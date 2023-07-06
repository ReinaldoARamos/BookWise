import Image from "next/image";
import { LogoContainer, LogoSection, WellcomeContainer } from "./style";
import Logo from "../../../public/logo.svg";
import { Heading, Text } from "@ignite-ui/react";
import { AuthButtons } from "../components/authButtons";

export default function Login() {
  return (
    <LogoContainer>
      <LogoSection>
        <Image src={Logo} alt="" />
      </LogoSection>
      <WellcomeContainer>
        <Heading size={"lg"} >Boas Vindas!</Heading>
        <Text size={"md"}>Faça seu login ou entre como visitante</Text>
        <AuthButtons />
      </WellcomeContainer>
    </LogoContainer>
  );
}
