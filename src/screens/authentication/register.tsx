import BackgroundImages from "@/components/ScreenComponents/Onboarding/BackgroundImages";
import CardHeader from "@/components/ScreenComponents/Onboarding/CardHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/utils/schemas";
import type { RegisterFormData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const RegisterScreen = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegisterFormData>({ resolver: zodResolver(RegisterSchema) });

    const submit = (data: RegisterFormData) => {
        console.log(data);
    };

    return (
        <div className="flex">
            <BackgroundImages />

            <div className="border border-black z-50 p-10 rounded-sm space-y-10 shadow-lg text-neutral-200 backdrop-blur-xl !text-black">
                <CardHeader title="Welcome to Contact Management App!" description="Register to Contact Management App, and start organize your contacts!" />

                <form className="space-y-5 z-50" onSubmit={handleSubmit(submit)}>
                    <div className="space-y-2">
                        <Input {...(register("username"))} placeholder="Username" />
                        <p className="text-red-500 text-xs h-1">
                            {errors.username ? errors.username.message : ""}
                        </p>
                    </div>

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

export default RegisterScreen;