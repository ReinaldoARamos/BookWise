import Head from "next/head";

import { ReactNode } from "react";
import { Container, Content } from "../style";
import { SideBar } from "@/components/SideBar";

type DefaultLayoutProps = {
  children: ReactNode;
  title: string;
};

export const DefaultLayout = ({ title, children }: DefaultLayoutProps) => {
  return (
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  );
};
