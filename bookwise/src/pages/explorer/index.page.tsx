import { ExplorerContainer } from "./style";
import { BookCard } from "./components/BookCard";
import { NextSeo } from "next-seo";

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
