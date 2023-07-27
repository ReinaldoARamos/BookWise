import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const id = String(req.query.id)

  const BookInfos = await prisma.book.findUnique({
    where: {
      id: id
    },
    include: {
      categories: {
          include: {
            category: {
              
            }
          }
      }
    },

    
  });

  return res.json(BookInfos);
}
