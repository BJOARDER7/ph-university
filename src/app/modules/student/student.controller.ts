import { Request, Response } from "express"
import { StudentServices } from "./student.service"
import StudentValidationSchema from "./student.validation";


const createStudent = async (req : Request, res : Response) => {
    try {

      
        const {student: studentData} = req.body;

        const zodParsedData = StudentValidationSchema.parse(studentData);



    const result = await StudentServices.createStudentIntoDB(zodParsedData);
    res.status(200).json({
        success: true,
        message: 'Student created successfully',
        data: result
    })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err
        })  
    }
}
const getAllStudents = async (req : Request, res : Response) => {
    try {
        
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
        success: true,
        message: 'Student get successfully',
        data: result
    })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err
        })  
    }
}
const getSingleStudent = async (req : Request, res : Response) => {
    try {
    const {studentId} = req.params;
    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
        success: true,
        message: 'Single student data get successfully',
        data: result
    })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Something went wrong',
            error: err
        })  
    }
}



export const StudentControllers = {
    createStudent,
    getAllStudents,
    getSingleStudent
}