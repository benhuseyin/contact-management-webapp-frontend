import { CreateContactSchema, LoginSchema, RegisterSchema } from "@/utils/schemas";
import type z from "zod";

export type LoginFormData = z.infer<typeof LoginSchema>;

export type RegisterFormData = z.infer<typeof RegisterSchema>;

export type CreateContactFormData = z.infer<typeof CreateContactSchema>;

export type RegisterRequestBody = {
    username: string;
    email: string;
    password: string;
}

export type RegisterResponseBody = {
    _id: string;
    email: string;
}

export type BackendErrorResponse = {
    data: {
        title: string;
        message: string;
        stackTrace?: string;
    },
    status: string
};

export type LoginRequestBody = {
    email: string;
    password: string;
}

export type LoginResponseBody = {
    accessToken: string;
}

export type CurrentUserRequestBody = {
    timestamps: string;
}

export type CurrentUserResponseBody = {
    user: User;
}

export type GetContactResponseBody = {
    user: User[];
}

export type User = {
    id: string;
    username: string;
    email: string;
}

export type CreateContactRequestBody = {
    name: string;
    email: string;
    phone: string
}

export type CreateContactResponseBody = {
    contact: Contact;
}

export type Contact = {
    userId: string;
    name: string;
    email: string;
    phone: string
}