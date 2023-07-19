import { prisma } from "@/lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  const LatestUser = await prisma.user.findMany({
    orderBy: {
      created_at: "desc",
    },
    take: 5,
  });

  res.json(LatestUser);
}
