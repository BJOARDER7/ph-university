import { StudentModel } from "./student.model";
import { TStudent } from "./student.interface";


const createStudentIntoDB = async (student: TStudent) => {
    const result = await StudentModel.create(student)

    return result
}
const getAllStudentFromDB = async () => {
    const result = await StudentModel.find()

    return result
}

export const StudentServices = {
    createStudentIntoDB,
    getAllStudentFromDB
}