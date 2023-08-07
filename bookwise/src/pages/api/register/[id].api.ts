import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { buildNextAuthOptions } from "../auth/[...nextauth].api";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const CreateNewRateSchema = z.object({
  review: z.string().min(1).max(400),
  Rating: z.number().min(1).max(5),
  
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method != "POST") {
    return res.status(405).end(); //retorna erro caso tentem outro método
  }

  const session = await getServerSession(
    req,
    res,
    buildNextAuthOptions(req, res) //pega as opções de build do next auth, como scope e providers
  );

  if (!session) {
    return res.status(401).end();
  }
  const book_id = String(req.query.id);
  const user_id = session.user.id;
  const { review, Rating } = CreateNewRateSchema.parse(req.body);
  const created_at =  new Date()
  await prisma.rating.create({
    data: {
      description:  review,
      rate: Rating,
      book_id,
      user_id,
created_at
    },

  });
  return res.status(204).end();
}
