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
          category: {},
        },
      },
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ["book_id"],
    _avg: {
      rate: true,
    },
  });

  const booksWithAvgRating = ExplorerBooks.map((book) => {
    const bookAvgRating = booksAvgRating.find(
      (avgRating) => avgRating.book_id === book.id
    );
    const { ratings, ...bookInfo } = book;
    return {
      ...bookInfo,
      ratings: ratings.length,
      avgRating: bookAvgRating?._avg.rate,
    };
  });
  return res.json( booksWithAvgRating );
}
