import { FastifyInstance } from "fastify";
import { getAll } from "./getAll";
import { getOne } from "./getOne";
import { create } from "./create";
import { UpdatePost } from "./update";
import { deletePost } from "./delete";
import { jwtValidate } from "@/http/middlewares/jwt-validate";

export async function postRoutes(app: FastifyInstance) {
  app.get("/post", getAll);
  app.get("/post/:postId", getOne);
  app.post("/post", { onRequest: [jwtValidate] }, create);
  app.put("/post/:postId", { onRequest: [jwtValidate] }, UpdatePost);
  app.delete("/post/:postId", { onRequest: [jwtValidate] }, deletePost);
}
