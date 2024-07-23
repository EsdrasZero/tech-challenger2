import { IPost } from "@/entities/model/post.interface";
import { ITeacher } from "@/entities/model/teacher.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";

export class GetOnePostUseCase {
  constructor(private readonly postRepository: IPostRepository){}

  async handler(postId: string): Promise <(IPost & ITeacher) | null> {
    const post = await this.postRepository.getOne(postId);
    if(!post) throw new ResourceNotFoundError();
    return post;

  }
}