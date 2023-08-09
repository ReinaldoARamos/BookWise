import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const id = String(req.query.id);

  const BookInfos = await prisma.book.findUnique({
    where: {
      id: id,
    },
    include: {
      categories: {
        include: {
          category: {},
        },
      },
      ratings: {
        include: {
          user: {},
        },
      },
    },
  });

  const booksAvgRating = await prisma.rating.groupBy({
    by: ['book_id'],
    where: {
      book_id: id
    },
    _avg: {
      rate: true
    }
  })

  const bookWithAvgRating = {
    ...BookInfos,
    avgRating: booksAvgRating[0]?._avg.rate ?? 0
  }
  return res.json(bookWithAvgRating);
}
