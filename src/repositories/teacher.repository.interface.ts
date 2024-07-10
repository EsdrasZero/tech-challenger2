import { ITeacher } from "@/entities/model/teacher.interface";

export interface ITeacherRepository {
  create (teacher: ITeacher): Promise<ITeacher>
}

