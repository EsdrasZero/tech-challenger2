import { IPost } from "./model/post.interface";

export class Post implements IPost {
  id?: number;
  title: string;
  content: string;
  created_at?: Date;
  teacher_id?: string | undefined;
}
