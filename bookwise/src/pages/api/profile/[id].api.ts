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
  


  const user = await prisma.user.findUnique({
    where: {
        id,
    },
    include: {
      ratings: {
        include: {
          book: {}
        }
      }
    
    }
  })
  console.log(user);

  return res.json(user);
}