import { IPost } from "@/entities/model/post.interface";
import { ITeacher } from "@/entities/model/teacher.interface";


export interface IPostRepository {
  getAll(page: number, limit: number): Promise<(IPost & ITeacher)[] | []>;
  getOne(postId: string): Promise<(IPost & ITeacher) | null>;
  create(post: IPost): Promise<IPost>;
  updatePost(postId: string, post: IPost): Promise<IPost | null>;
  deletePost(postId: string): Promise<IPost | null>;
}
