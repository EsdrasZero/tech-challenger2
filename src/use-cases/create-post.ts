import { IPost } from "../entities/model/post.interface";
import { IPostRepository } from "../repositories/post.repository.interface";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost): Promise<IPost> {
    return this.postRepository.create(post);
  }
}
