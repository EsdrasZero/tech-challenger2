import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCrateTeacherUseCase } from "../../../use-cases/factory/make-create-teacher";

export async function create(request: FastifyRequest, reply:FastifyReply){
 const registerBodySchema = z.object({
    name: z.string(),
    school_subject: z.string(),
 });
 const { name, school_subject } = registerBodySchema.parse(request.body);

 const createTeacherUseCase = makeCrateTeacherUseCase();
 const teacher = await createTeacherUseCase.handler({ name, school_subject });

 return reply.code(201).send(teacher);
}

