import { Heading } from "@ignite-ui/react";
import { NextSeo } from "next-seo";
import { SideBar } from "../components/SideBar";

export default function Home() {
  return (
    <>
      <NextSeo title="Home | BookWise" description="Página de ínício" />
      <SideBar></SideBar>
    </>
  );
}
