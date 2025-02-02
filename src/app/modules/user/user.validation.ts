import { z } from "zod";

const userValidationSchema = z.object({
   
    password: z.string({
        invalid_type_error: 'Password must be string'
    }).max(20, {message: 'Pasword can not be more than 20 character'}).optional(),
    
  });

  export const userValidation = {
    userValidationSchema,
  }