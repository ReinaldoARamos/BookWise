import { useEffect, useState } from "react";
import { AllButtons, GeneralTabButton, TagContainer } from "./style";
import { api } from "@/lib/axios";

interface BookTags {
  id: string;
  name: string;
}
interface BookTagsProps {
  name: string;
}
export function BookTags() {
  const [bookTags, setBookTags] = useState<BookTags[]>([]);

  async function fetchData() {
    const response = await api.get("books/category");
    console.log(response.data);
    setBookTags(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function Teste(name: string) {
    console.log(name);
  }

  return (
    <TagContainer>
      <AllButtons active={"ButtonActive"}>Todos</AllButtons>
      {bookTags.map((tag) => (
        <>
          <GeneralTabButton onClick={() => Teste(tag.name)}>
            {tag.name}
          </GeneralTabButton>
        </>
      ))}
    </TagContainer>
  );
}
