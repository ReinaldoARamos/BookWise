import { HeaderContainer } from "./style";
import {MagnifyingGlass} from 'phosphor-react'
export function ExplorerHeader() {
  return (
    <HeaderContainer>
      <header>
        <div>Explorar</div>
        <section>
        <input placeholder="Procure um livro"  /> 
        <MagnifyingGlass />
        </section>
      
      </header>
    </HeaderContainer>
  );
}
