import z from "zod";

export const emailRegex = /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i

export const LoginSchema = z.object({
    email: z.email({ message: 'Please entrey a valid email address.', pattern: emailRegex }).min(1, { message: "The E-mail field cannot be left blank." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
});

export const RegisterSchema = z.object({
    username: z.string().min(1, { message: "The email field cannot be left blank." }).max(50, { message: "Username cannot exceed 50 characters." }),
    email: z.email({ message: 'Please entrey a valid email address.', pattern: emailRegex }).min(1, { message: "The email field cannot be left blank." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
});