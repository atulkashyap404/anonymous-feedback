import {z} from 'zod'

export const usernameValidation = z
    .string()
    .min(3, 'Username must be at least 3 characters long')
    .max(20, "Username must be no more than 20 charectors")
    .regex(/^[a-zA-Z0-9]+$/, 'Username must not contain Special character')

export const signUpSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "invalid email address"}),
    password: z.string().min(6, {message: "password must be at least 6 characters long"}).max(16)
})