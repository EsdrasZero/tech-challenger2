import { ResourceNotFoundError } from "@/use-cases/errors/resource-not-found-error";
import { makeDeletePostuseCase } from "@/use-cases/factory/make-delete-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deletePost(request: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    postId: z.string(),
  });

  const { postId } = registerParamsSchema.parse(request.params);

  const deletePostUseCase = makeDeletePostuseCase();
  const result = await deletePostUseCase.handler(postId);

  if (!result) throw new ResourceNotFoundError()

  return reply
    .status(200)
    .send({ message: `Post deletado com sucesso`, post: result })
}