
import { makeFindAllPostUseCase } from "@/use-cases/factory/make-find-all-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function getAll(request: FastifyRequest, reply: FastifyReply) {
  const resgisterQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = resgisterQuerySchema.parse(request.query)

  const getAllPostUseCase = makeFindAllPostUseCase();
  const result = await getAllPostUseCase.handler(page, limit)

  return reply.status(200).send(result)
}