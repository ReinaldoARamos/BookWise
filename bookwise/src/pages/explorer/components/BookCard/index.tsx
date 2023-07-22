import { ExplorerHeader } from "../BookHeader";
import { BookList } from "../BookList";
import { BookTags } from "../BookTags";
import { BookCardContainer } from "./style";

export function BookCard() {
    return (
        <BookCardContainer>
        <ExplorerHeader />
        <BookTags />
        <BookList />
        </BookCardContainer>
        
    )
}