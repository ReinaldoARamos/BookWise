import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const ExplorerBooks = await prisma.book.findMany({
    include: {
     ratings: {},
     categories: {
          include: {
            category: {
              
            }
          }
      }
    
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],
    where: {
      book_id: {
        in: ExplorerBooks.map((book) => book.id),
      },
    },
    _avg: {
      rate: true,
    },
  }); //pego os livros e agrupo onde os que tem a ID dentro do array acima, e então pego a average rate(média)

  const BooksWighAvgRating = ExplorerBooks.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    ); //faz um find e pega os livros com nota

    const { categories, ...bookInfo} = book; //desestrutura, pegando as ratings e o ...bookInfo é o resto(aitor, usuário etc)

    return {
      ...bookInfo,
      avgRating: bookAvgRating?._avg.rate, //retorna as informações e a average rating
    };
  }).sort(
    (a, b) => (a.avgRating && b.avgRating ? b.avgRating - a.avgRating : 0) //ele faz um sort das notas
  );
  return res.json({BooksWighAvgRating});
}
