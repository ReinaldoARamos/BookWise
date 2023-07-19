import { prisma } from "@/lib/prisma";
import { PopularBook } from "@/pages/user/home/components/PopularBooks";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const books = await prisma.book.findMany({
    include: {
      ratings: true,
    },
    orderBy: {
      ratings: {
        _count: 'desc'
      }
    },
    take: 5 //pego dentro do prisma livros e suas avaliações e agrupo em ordem decrescente
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: {
        in: books.map(book => book.id)
      }
    },
    _avg:{
      rate:  true
    }
  }) //pego os livros e agrupo onde os que tem a ID dentro do array acima, e então pego a average rate(média)



  const BooksWighAvgRating = books.map((book) => {
    const bookAvgRating = booksAvgRating.find(avgRating => avgRating.book_id === book.id) //faz um find e pega os livros com nota
     
    const {ratings, ...bookInfo} = book //desestrutura, pegando as ratings e o ...bookInfo é o resto(aitor, usuário etc)

    return {
      ...bookInfo,
      avgRating: bookAvgRating?._avg.rate //retorna as informações e a average rating
    }

  }).sort((a,b) => 
  a.avgRating && b.avgRating ? b.avgRating - a.avgRating : 0 //ele faz um sort das notas
  )

  return res.json({books: BooksWighAvgRating})
}
