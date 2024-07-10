import { create } from "./create";
import { FastifyInstance } from "fastify";

export async function routesTeacher(app: FastifyInstance) {
  app.post("/teacher", create);
}
