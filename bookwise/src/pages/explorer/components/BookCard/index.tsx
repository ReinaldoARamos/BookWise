import { ExplorerHeader } from "../BookHeader";
import { BookTags } from "../BookTags";
import { BookCardContainer } from "./style";

export function BookCard() {
    return (
        <BookCardContainer>
        <ExplorerHeader />
        <BookTags />
        
        </BookCardContainer>
        
    )
}