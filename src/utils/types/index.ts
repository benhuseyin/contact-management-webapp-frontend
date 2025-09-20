import { LoginSchema } from "@/utils/schemas";
import type z from "zod";

export type LoginFormData = z.infer<typeof LoginSchema>;
