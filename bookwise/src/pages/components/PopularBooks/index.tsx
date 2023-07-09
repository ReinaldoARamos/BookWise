import { PopularContainer } from "./style";
import { CaretRight} from 'phosphor-react'
export function PopularBooks() {
    return (
     <PopularContainer>
        <header>
        <section>Livros mais populares</section>
        <div>Ver todos <CaretRight /></div>            
        </header>

     </PopularContainer>
    )
}