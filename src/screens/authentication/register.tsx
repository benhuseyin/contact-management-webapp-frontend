import BackgroundImage from "@/components/ScreenComponents/Onboarding/BackgroundImage";
import CardHeader from "@/components/ScreenComponents/Onboarding/CardHeader";
import OnboardingPageWrapper from "@/components/ScreenComponents/Onboarding/OnboardingPageWrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RegisterSchema } from "@/utils/schemas";
import type { RegisterFormData } from "@/utils/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BgImage from "@/assets/images/RegisterBackground.webp"
import AuthFooterItem from "@/components/ScreenComponents/Onboarding/AuthFooterItem";
import { Link } from "react-router-dom";

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
            <BackgroundImage imgSrc={BgImage} />

            <OnboardingPageWrapper>
                <CardHeader
                    title="Welcome to Contact Management App!"
                    description="Register to Contact Management App, and start organize your contacts!"
                />

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


                    <Button type="submit" className="mt-5">REGISTER</Button>
                </form>

                <AuthFooterItem>
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </AuthFooterItem>
            </OnboardingPageWrapper>

        </div>
    );

}

export default RegisterScreen;