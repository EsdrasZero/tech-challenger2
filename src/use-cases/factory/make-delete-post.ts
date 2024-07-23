import { PostRepository } from "@/repositories/pg/post.repository";
import { DeletePostUseCase } from "../delete-post";

export function makeDeletePostuseCase() {
  const postRepository = new PostRepository();
  const deletePostuseCase = new DeletePostUseCase(postRepository);
  return deletePostuseCase
}