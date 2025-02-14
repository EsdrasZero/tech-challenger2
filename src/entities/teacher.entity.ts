import { ITeacher } from "./model/teacher.interface";

export class Teacher implements ITeacher {
  id?: number | undefined;
  name: string;
  school_subject: string;
  user_id?: number | undefined;
}
