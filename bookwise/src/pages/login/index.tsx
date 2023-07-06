import Image from "next/image";
import { LogoContainer, LogoSection, WellcomeContainer } from "./style";
import Logo from "../../../public/logo.svg";
import { Heading, Text } from "@ignite-ui/react";
import { AuthButtons } from "../components/authButtons";
import { NextSeo } from "next-seo";

export default function Login() {
  return (
    <>
      <NextSeo title="Login | BookWise" description="availabiluty set" />
      <LogoContainer>
        <LogoSection>
          <Image src={Logo} alt="" />
        </LogoSection>
        <WellcomeContainer>
          <Heading size={"lg"}>Boas Vindas!</Heading>
          <Text size={"md"}>Faça seu login ou entre como visitante</Text>
          <AuthButtons />
        </WellcomeContainer>
      </LogoContainer>
    </>
  );
}
