import { Star } from "phosphor-react";
import BookExample from "../../../../../../public/images/books/o-hobbit.png";
import Image from "next/image";
import { BookListCardContainer, BookListCardContent } from "./style";
import { useEffect, useState } from "react";
import { api } from "@/lib/axios";
import { BookTags } from "../BookTags";

interface ExplorerProps {
  id: string;

  name: string;
  author: string;
  summary: string;
  cover_url: string;

  categories: [
    categorie: {
      category: {
        name: string;
      };
    }
  ];
}
interface Teste {
  name: string;
}
export function BookListCard() {
  const [explorerBooks, setExplorerBooks] = useState<ExplorerProps[]>([]);
  //const [filteredList, setFilteredList] = useState<ExplorerProps[]>([]);

  async function fetchData() {
    const response = await api.get("books/explorer");
    setExplorerBooks(response.data);
  }
  useEffect(() => {
    fetchData();
  }, []);

  const searchString = "Ficção"; // The string you want to filter by

  const filteredList = explorerBooks.filter((obj) =>
    obj.categories
      .map((category) => category.category.name)
      .includes(searchString)
  );

  console.log(filteredList);
  return (
    <>
   
      {filteredList.map((item) => (
        <>
          <div>{item.name}</div>
          <div>{item.author}</div>
          <img src={item.cover_url}/>
        
        </>
      ))}
    </>
  );
}

/*
  <>
      {explorerBooks.map((item) => (
        <BookListCardContainer key={item.id}>
          <Image src={item.cover_url} alt="" width={108} height={152} />

          <BookListCardContent>
            <section>
              {item.name}
              <div>{item.author}</div>
             {item.categories.map((items) => (
              <div>{(items.category.name).split(',')}</div>
             ))}
            </section>

            <p>
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} weight="fill" />
              <Star size={20} />
            </p>
          </BookListCardContent>
        </BookListCardContainer>
      ))}
    </>
* */
