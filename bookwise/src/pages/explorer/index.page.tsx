import { SideBar } from "@/components/SideBar";
import { ExplorerContainer } from "./style";
import { PageHeader } from "@/components/Header";
import { Placeholder } from "phosphor-react";
import { BookCard } from "./components/BookCard";

export default function Explorer() {
  return (
    <ExplorerContainer>
      <SideBar />
      <BookCard />
    </ExplorerContainer>
  );
}
