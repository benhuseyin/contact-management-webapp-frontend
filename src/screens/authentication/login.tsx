import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BgImage from "@/assets/images/LoginBackground.webp"
import RedBgImage from "@/assets/images/RegisterBackground.webp"
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const LoginSchema = z.object({
    email: z.email({ message: 'Please entrey a valid email address.', pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i }).min(1, { message: "E-mail alanı boş bırakılamaz." }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters long" })
        .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
        .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
        .regex(/[0-9]/, { message: "Password must contain at least one number" })
        .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
});

export type LoginFormData = z.infer<typeof LoginSchema>;

const LoginScreen = () => {
    const [hasAnimation, setHasAnimation] = useState();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });

    const submit = (data: LoginFormData) => {
        console.log(data);
    };

    const handleStopAnimation = () => {

    }

    return (
        <div className="flex">
            <img
                src={BgImage}
                alt="Login background"
                className="absolute left-1/2 top-1/2 -translate-1/2"
            />
            <img
                src={RedBgImage}
                alt="Login background"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin"
            />


            <div className="border border-black z-50 p-10 rounded-sm space-y-10 shadow-lg text-neutral-200 backdrop-blur-xl !text-black">
                <div className="space-y-2.5 z-50">
                    <h1>Welcome Back!</h1>
                    <p>Enter Your Username & Password</p>
                </div>

                <form className="space-y-5 z-50" onSubmit={handleSubmit(submit)}>
                    <div className="space-y-2">
                        <Input {...(register("email"))} placeholder="E-mail" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.email ? errors.email.message : ""}
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Input {...(register("password"))} placeholder="********" type="password" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.password ? errors.password.message : ""}
                        </p>
                    </div>


                    <Button type="submit" className="mt-5">LOGIN</Button>
                </form>
            </div>

        </div>
    );

}

export default LoginScreen;

