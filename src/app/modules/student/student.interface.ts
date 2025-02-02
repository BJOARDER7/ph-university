import { Model, Types } from "mongoose";


export type TStudentName = {
    firstName: string;
    middleName?: string | undefined;
    lastName: string;
};

export type TGuardian = {
    fatherName: string;
    fatherOccupation: string;
    fatherContactNo: string;
    motherName: string;
    motherOccupation: string;
    motherContactNo: string;
};

export type TLocalGuardian = {
    name: string;
    occupation: string;
    contactNo: string;
    address: string;
}
export type TStudent = {
    id: string;
    user: Types.ObjectId;
    password?: string;
    name: TStudentName;
    gender: 'male' | 'female' | 'other';
    dateOfBirth?: string;
    email: string;
    contactNo: string;
    emergencyContactNo: string;
    bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    presentAddress: string;
    permanentAddress: string;
    guardian: TGuardian;
    localGuardian: TLocalGuardian;
    profileImg?: string | undefined;
    isDeleted?: boolean;
  };


  export interface StudentModel extends Model<TStudent>{
    isStudentExists(id: string): Promise<TStudent | null>
  }
 