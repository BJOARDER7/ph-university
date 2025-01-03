import { z } from 'zod';

const StudentNameSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(2, { message: 'First name must be at least 2 characters' })
    .max(20, { message: 'First name cannot exceed 20 characters' }),
  middleName: z.string().trim().max(20).optional(),
  lastName: z
    .string()
    .trim()
    .min(2, { message: 'Last name must be at least 2 characters' })
    .max(20, { message: 'Last name cannot exceed 20 characters' }),
});


const GuardianSchema = z.object({
  fatherName: z
    .string()
    .trim()
    .min(2, { message: 'Father name must be at least 2 characters' }),
  fatherOccupation: z.string().trim().min(1, { message: 'Father occupation is required' }),
  fatherContactNo: z
    .string()
    .trim()
    .max(11, { message: 'Father contact number must be an 11-digit number' }),
  motherName: z
    .string()
    .trim()
    .min(2, { message: 'Mother name must be at least 2 characters' }),
  motherOccupation: z.string().trim().min(1, { message: 'Mother occupation is required' }),
  motherContactNo: z
    .string()
    .trim()
    .max(11, { message: 'Mother contact number must be an 11-digit number' }),
});


const LocalGuardianSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'Local guardian name must be at least 2 characters' }),
  occupation: z.string().trim().min(1, { message: 'Occupation is required' }),
  contactNo: z
    .string()
    .trim()
    .max(11, { message: 'Contact number must be an 11-digit number' }),
  address: z
    .string()
    .trim()
    .min(10, { message: 'Address must be at least 10 characters long' }),
});


const StudentValidationSchema = z.object({
  id: z
    .string()
    .trim()
    .min(1, { message: 'ID is required' }),
    password: z.string().max(20),
  name: StudentNameSchema,
  gender: z.enum(['male', 'female', 'other'], { message: 'Gender must be male, female, or other' }),
  dateOfBirth: z.string().trim().min(1, { message: 'Date of birth is required' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Invalid email address' }),
  contactNo: z
    .string()
    .trim()
    .max(11, { message: 'Contact number must be an 11-digit number' }),
  emergencyContactNo: z
    .string()
    .trim()
    .max(11, { message: 'Emergency contact number must be an 11-digit number' }),
  bloogGroup: z.enum(
    ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    { message: 'Invalid blood group' }
  ),
  presentAddress: z
    .string()
    .trim()
    .min(10, { message: 'Present address must be at least 10 characters long' }),
  permanentAddress: z
    .string()
    .trim()
    .min(10, { message: 'Permanent address must be at least 10 characters long' }),
  guardian: GuardianSchema,
  localGuardian: LocalGuardianSchema,
  profileImg: z
    .string()
    .trim()
    .optional(),
  isDeleted: z.boolean().optional(),
});

export default StudentValidationSchema;
