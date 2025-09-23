import { LoginSchema, RegisterSchema } from "@/utils/schemas";
import type z from "zod";

export type LoginFormData = z.infer<typeof LoginSchema>;

export type RegisterFormData = z.infer<typeof RegisterSchema>;
