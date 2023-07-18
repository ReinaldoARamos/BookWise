import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const RecentRating = await prisma.rating.findMany({
    orderBy: {
      created_at: "desc",
    },
    include: {
      book: true,
      user: true,
    },
    take: 5,
  });

  const PopularBooks = await prisma.rating.findMany({
    orderBy: {
      rate: "desc",
    },
    include: {
      book: true,
      user: true,
    },
    take: 5,
  });
  res.json({ RecentRating, PopularBooks });
}
