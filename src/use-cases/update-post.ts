
import { IPost } from "@/entities/model/post.interface";
import { IPostRepository } from "@/repositories/post.repository.interface";

export class UpdatePostUseCase {
  constructor(private readonly postRepository: IPostRepository) {}

  async handler(postId: string, post: IPost): Promise<IPost | null> {
    return this.postRepository.updatePost(postId, post);
  }
}
