import { Heading } from "@ignite-ui/react";
import { Binoculars, ChartLineUp } from "phosphor-react";
import { HeadingContainer } from "./style";

interface PageHeaderProps {
  isHome: boolean;
}

export function PageHeader({ isHome }: PageHeaderProps) {
  return (
    <HeadingContainer>
      <Heading>
        {isHome ? <ChartLineUp /> : <Binoculars />}
        Início
      </Heading>
    </HeadingContainer>
  );
}
