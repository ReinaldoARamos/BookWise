import { prisma } from "@/lib/prisma";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const category = await prisma.rating.findMany({
    
  });

  return res.json(category);
}
