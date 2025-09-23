import { LoginSchema, RegisterSchema } from "@/utils/schemas";
import type z from "zod";

export type LoginFormData = z.infer<typeof LoginSchema>;

export type RegisterFormData = z.infer<typeof RegisterSchema>;

export type RegisterRequestBody = {
    username: string;
    email: string;
    password: string;
}

export type RegisterResponseBody = {
    _id: string;
    email: string;
}