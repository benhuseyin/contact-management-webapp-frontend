import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/schemas";
import type { LoginFormData } from "@/utils/types";
import CardHeader from "@/components/ScreenComponents/Onboarding/CardHeader";
import BackgroundImages from "@/components/ScreenComponents/Onboarding/BackgroundImages";

const LoginScreen = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });


    const submit = (data: LoginFormData) => {
        console.log(data);
    };


    return (
        <div className="flex">

            <BackgroundImages />

            <div className="border border-black z-50 p-10 rounded-sm space-y-10 shadow-lg text-neutral-200 backdrop-blur-xl !text-black">
                <CardHeader title="Welcome Back!" description="Enter Your Username & Password" />

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

