import { useEffect, useState } from "react";
import { AllButtons, GeneralTabButton, TagContainer } from "./style";
import { api } from "@/lib/axios";

interface BookTags {
  id: string;
  name: string;
}

export function BookTags() {
  const [bookTags, setBookTags] = useState<BookTags[]>([]);

  async function fetchData() {
    const response = await api.get("books/category");
    setBookTags(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  function Teste(name: string) {
     const FilterName = name
     console.log(FilterName)
  }

  return (
    <TagContainer>
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
