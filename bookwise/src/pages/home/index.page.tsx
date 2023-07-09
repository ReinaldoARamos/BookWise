import { Heading } from "@ignite-ui/react";
import { NextSeo } from "next-seo";
import { SideBar } from "../components/SideBar";
import { PopularBooks } from "../components/PopularBooks";
import { HomeContainer } from "./style";
import { LatestRatedBooks } from "../components/LatestRatedBooks";
import { PageHeader } from "../components/Header";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <NextSeo title="Home | BookWise" description="Página de ínício" />
        <SideBar />
        <LatestRatedBooks />
        <PopularBooks />
      </HomeContainer>
    </>
  );
}
