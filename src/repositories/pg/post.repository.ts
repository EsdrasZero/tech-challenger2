import { database } from './../../lib/pg/db';
import { IPostRepository } from "../post.repository.interface";
import { IPost } from '../../entities/model/post.interface';
import { ITeacher } from '../../entities/model/teacher.interface';
import { IPostUpdate } from '@/entities/model/post.update.interface';
export class PostRepository implements IPostRepository {

  async getAll(
    page: number,
    limit: number
  ): Promise<(IPost & ITeacher)[] | []> {
    const offset = (page - 1) * limit;

    const result = await database.clientInstance?.query(
      `
      SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
      FROM post
      INNER JOIN teacher
      ON post.teacher_id = teacher.id
      LIMIT $1 OFFSET $2
      `,
      [limit, offset]
    );

    return result?.rows || [];
  }

  async getOne(postId: string): Promise<(IPost & ITeacher) | null> {
    const result = await database.clientInstance?.query(
      `
    SELECT post.id, post.title, post.content, post.createdAt, teacher.id as idTeacher, teacher.name, teacher.school_subject
    FROM post
    INNER JOIN teacher
    ON post.teacher_id = teacher.id
    WHERE post.id = $1
    `,
      [postId]
    );

    return result?.rows[0] || null;

  }

  async create({ title, content, teacher_id }: IPost): Promise<IPost> {
    const now = new Date();

    const result = await database.clientInstance?.query(
      `
      INSERT INTO post (title, content, teacher_id, createdAt)
      VALUES ($1, $2, $3, $4)
      RETURNING *
      `,
      [title, content, teacher_id, now]
    );
    return result?.rows[0];
  }

  async updatePost(
    postId: string,
    { title, content }: IPostUpdate
  ): Promise<IPost | null> {
    console.log(title, content);
    const result = await database.clientInstance?.query(
      `
    UPDATE post
    SET title = COALESCE($1, title), content = COALESCE($2, content)
    WHERE post.id = $3
    RETURNING *
    `,
      [title, content, postId]
    );
    console.log(result?.rows[0]);
    return result?.rows[0];
  }

  async deletePost(postId: string): Promise<IPost | null> {
    const result = await database.clientInstance?.query(
      `
    DELETE FROM post
    WHERE id = $1
    RETURNING *
    `,
      [postId]
    );

    return result?.rows[0] || null;
  }
}

