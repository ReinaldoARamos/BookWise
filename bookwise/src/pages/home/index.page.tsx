import { NextSeo } from "next-seo";


import { HomeContainer } from "./style";
import { LatestRatedBooks } from "./components/LatestRatedBooks";

import { PopularBook } from "./components/PopularBooks";
import { SideBar } from "@/components/SideBar";

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
