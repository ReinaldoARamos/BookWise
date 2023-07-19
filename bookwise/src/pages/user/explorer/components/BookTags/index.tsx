import { useEffect, useState } from "react";
import { AllButtons, GeneralTabButton, TagContainer } from "./style";
import { api } from "@/lib/axios";


interface BookTags {
    id: string,
    name: string
}
export function BookTags() {

    
  const [bookTags, setBookTags] = useState<BookTags[]>([])

  async function fetchData() {
    const response = await api.get('books/category')
    console.log(response.data)
    setBookTags(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
    return (
        <TagContainer>
             <AllButtons active={"ButtonActive"}>Todos</AllButtons>
            {bookTags.map((tag) => (
                <>
                  
                  <GeneralTabButton>{tag.name}</GeneralTabButton>
              
                </>
              
            ))}
        </TagContainer>
    )
}