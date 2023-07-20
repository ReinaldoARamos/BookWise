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

  const UserId = "4383f783-6ce1-4f92-b1dd-7a7a693c4aef"

  const user = await prisma.user.findUnique({
    where: {
        id: UserId
    },
    include: {
      ratings: {
        
      }
    }
  })

  return res.json(user);
}