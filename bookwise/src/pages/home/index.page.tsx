import { Heading } from "@ignite-ui/react";
import { NextSeo } from "next-seo";
import { SideBar } from "../components/SideBar";

import { HomeContainer } from "./style";
import { LatestRatedBooks } from "./components/LatestRatedBooks";
import { PageHeader } from "../components/Header";
import { PopularBook } from "./components/PopularBooks";

export default function Home() {
  return (
    <>
      <HomeContainer>
        <NextSeo title="Home | BookWise" description="Página de ínício" />
        <SideBar />
        <LatestRatedBooks />
        <PopularBook />
        
      </HomeContainer>
    </>
  );
}
