import { TeacherRepository } from "../../repositories/pg/teacher.repository";
import { CreateTeacherUseCase } from "../create-teacher";

export function makeCrateTeacherUseCase() {
    const teacherRepository = new TeacherRepository();
    const createTeacherUseCase = new CreateTeacherUseCase(teacherRepository);
    return createTeacherUseCase;
}
