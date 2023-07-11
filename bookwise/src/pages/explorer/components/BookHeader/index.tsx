import { HeaderContainer } from "./style";
import {Binoculars, MagnifyingGlass} from 'phosphor-react'
export function ExplorerHeader() {
  return (
    <HeaderContainer>
      <header>
        <div>
          <Binoculars />
          
          Explorar</div>
        <section>
        <input placeholder="Procure um livro"  /> 
        <MagnifyingGlass />
        </section>
      
      </header>
    </HeaderContainer>
  );
}
