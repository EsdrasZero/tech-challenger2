import { PostRepository } from "@/repositories/pg/post.repository";
import { UpdatePostUseCase } from "../update-post";

export function makeUpdatePostUseCase(){
  const postRepository = new PostRepository();
  const updatePostUseCase= new UpdatePostUseCase(postRepository);
  return updatePostUseCase;
}