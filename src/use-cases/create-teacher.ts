import { ITeacherRepository } from "../repositories/teacher.repository.interface";
import { ITeacher } from "../entities/model/teacher.interface";

export class CreateTeacherUseCase {
  constructor(private teacherRepository: ITeacherRepository) {}
  async handler(teacher: ITeacher): Promise<ITeacher> {
    return this.teacherRepository.create(teacher);
  }
}
