import { ITeacherRepository } from "./../teacher.repository.interface";
import { ITeacher } from "./../../entities/model/teacher.interface";
import { database } from "./../../lib/pg/db";

export class TeacherRepository implements ITeacherRepository {
  async create({ name, school_subject, user_id }: ITeacher): Promise<ITeacher> {
    const result = await database.clientInstance?.query(
      `
    INSERT INTO teacher (name,school_subject)
    VALUES ($1, $2) RETURNING *`,
      [name, school_subject, user_id]
    );
    return result?.rows[0];
  }
}
