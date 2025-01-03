import { model, Schema } from "mongoose";
import { StudentModel, TGuardian, TLocalGuardian, TStudent, TStudentName } from "./student.interface";
import validator from 'validator';

const studentNameSchema = new Schema<TStudentName>({
    firstName: {
        type: String,
        required: [true, 'First name is required'],
        minlength: [2, 'First name must be at least 2 characters'],
        maxlength: [20, 'First name cannot exceed 20 characters'],
        trim: true,
        validate: {
            validator: function(value: string){
                const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
                return firstNameStr === value;
            },
            message: '{VALUE} is not capitalize format'
        }
    },
    middleName: {
        type: String,
        maxlength: [20, 'Middle name cannot exceed 20 characters'],
        trim: true,
    },
    lastName: {
        type: String,
        required: [true, 'Last name is required'],
        minlength: [2, 'Last name must be at least 2 characters'],
        maxlength: [20, 'Last name cannot exceed 20 characters'],
        trim: true,
        validate: {
            validator: (value: string) => validator.isAlpha(value),
            message: '{VALUE} is not valid'
        }
    },
});

const guardianSchema = new Schema<TGuardian>({
    fatherName: {
        type: String,
        required: [true, 'Father name is required'],
        minlength: [2, 'Father name must be at least 2 characters'],
        trim: true,
    },
    fatherOccupation: {
        type: String,
        required: [true, 'Father occupation is required'],
        trim: true,
    },
    fatherContactNo: {
        type: String,
        required: [true, 'Father contact number is required'],
        match: [/^\d{11}$/, 'Father contact number must be a 11-digit number'],
        trim: true,
    },
    motherName: {
        type: String,
        required: [true, 'Mother name is required'],
        minlength: [2, 'Mother name must be at least 2 characters'],
        trim: true,
    },
    motherOccupation: {
        type: String,
        required: [true, 'Mother occupation is required'],
        trim: true,
    },
    motherContactNo: {
        type: String,
        required: [true, 'Mother contact number is required'],
        match: [/^\d{11}$/, 'Mother contact number must be a 11-digit number'],
        trim: true,
    },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
    name: {
        type: String,
        required: [true, 'Local guardian name is required'],
        minlength: [2, 'Local guardian name must be at least 2 characters'],
        trim: true,
    },
    occupation: {
        type: String,
        required: [true, 'Occupation is required'],
        trim: true,
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
        match: [/^\d{11}$/, 'Contact number must be a 11-digit number'],
        trim: true,
    },
    address: {
        type: String,
        required: [true, 'Address is required'],
        minlength: [10, 'Address must be at least 10 characters long'],
        trim: true,
    },
});

const studentSchema = new Schema<TStudent, StudentModel>({
    id: {
        type: String,
        required: [true, 'ID is required'],
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
       maxlength: [20, 'Password not more then 20 characters']
    },
    name: {
        type: studentNameSchema,
        required: [true, 'Student name is required'],
    },
    gender: {
        type: String,
        enum: {
            values: ['male', 'female', 'other'],
            message: 'Gender must be male, female, or other',
        },
        required: [true, 'Gender is required'],
        trim: true,
    },
    dateOfBirth: {
        type: String,
        required: [true, 'Date of birth is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,        
        trim: true,
        validate: {
            validator: (value: string) => validator.isEmail(value),
            message: '{VALUE} is not a valid email type'
        }
    },
    contactNo: {
        type: String,
        required: [true, 'Contact number is required'],
        match: [/^\d{11}$/, 'Contact number must be a 11-digit number'],
        trim: true,
    },
    emergencyContactNo: {
        type: String,
        required: [true, 'Emergency contact number is required'],
        match: [/^\d{11}$/, 'Emergency contact number must be a 11-digit number'],
        trim: true,
    },
    bloogGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
        trim: true,
    },
    presentAddress: {
        type: String,
        required: [true, 'Present address is required'],
        minlength: [10, 'Present address must be at least 10 characters long'],
        trim: true,
    },
    permanentAddress: {
        type: String,
        required: [true, 'Permanent address is required'],
        minlength: [10, 'Permanent address must be at least 10 characters long'],
        trim: true,
    },
    guardian: {
        type: guardianSchema,
        required: [true, 'Guardian information is required'],
    },
    localGuardian: {
        type: localGuardianSchema,
        required: [true, 'Local guardian information is required'],
    },
    profileImg: {
        type: String,
        match: [/^(https?:\/\/[^\s]+)$/, 'Profile image must be a valid URL'],
        trim: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    },
});


studentSchema.statics.isStudentExists = async function(id: string) {
    const existingStudent = await Student.findOne({id})

    return existingStudent;
}

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
