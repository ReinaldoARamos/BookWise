import { Heading } from "@ignite-ui/react";
import { HeadingContainer } from "./style";
import { MagnifyingGlass, User } from "phosphor-react";



export function ProfileHeader() {
  return (
    <HeadingContainer>
      <Heading>
        <User />
        Perfil
      </Heading>

      <section>
        <input placeholder="Procure um livro"  /> 
        <MagnifyingGlass />
        </section>
      
    </HeadingContainer>
  );
}
