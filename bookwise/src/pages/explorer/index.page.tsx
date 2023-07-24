import { SideBar } from "@/components/SideBar";
import { ExplorerContainer } from "./style";
import { PageHeader } from "@/components/Header";
import { Placeholder } from "phosphor-react";
import { BookCard } from "./components/BookCard";
import { NextSeo } from "next-seo";
import Drawer from "react-modern-drawer";


export default function Explorer() {

  
  return (
    <>

        <NextSeo title="Explorar | BookWise" description="Página de Exploração" />
    <ExplorerContainer>
      
      <BookCard />
    </ExplorerContainer>
    </>
  );
}
