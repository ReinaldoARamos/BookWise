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

  const category = await prisma.category.findMany()

  return res.json(category);
}