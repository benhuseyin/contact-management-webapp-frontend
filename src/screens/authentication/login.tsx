import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "@/utils/schemas";
import type { LoginFormData } from "@/utils/types";
import CardHeader from "@/components/ScreenComponents/Onboarding/CardHeader";
import OnboardingPageWrapper from "@/components/ScreenComponents/Onboarding/OnboardingPageWrapper";
import { Link, useNavigate } from "react-router-dom";
import BgImage from "@/assets/images/LoginBackground.webp"
import BackgroundImage from "@/components/ScreenComponents/Onboarding/BackgroundImage";
import AuthFooterItem from "@/components/ScreenComponents/Onboarding/AuthFooterItem";
import { useLoginUserMutation } from "@/services/user";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/user/user";
import { LoaderCircle } from "lucide-react";
import BackendErrorItem from "@/components/ScreenComponents/Onboarding/BackendErrorItem";

const LoginScreen = () => {
    const [loginUser, { isLoading, error }] = useLoginUserMutation();
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });


    const handleOnsubmit = async (data: LoginFormData) => {
        try {
            const result = await loginUser({
                email: data.email,
                password: data.password
            }).unwrap();

            dispatch(setUser({
                email: data.email,
                token: result.accessToken,
            }));

            navigate("/dashboard");
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div className="flex">

            <BackgroundImage wrapperClassNames="rotate-90" imgSrc={BgImage} />

            <OnboardingPageWrapper wrapperClassNames="sm:!w-[450px]" hasError={error && error?.data.message.length > 0}>
                <CardHeader title="Welcome Back!" description="Enter Your Username & Password" />

                <form className="space-y-5 z-50" onSubmit={handleSubmit(handleOnsubmit)}>
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

                    <BackendErrorItem errorMessage={error?.data.message} />

                    <Button type="submit" className="mt-2.5 min-w-[88px]">
                        {isLoading ? <LoaderCircle className="animate-spin" size={16} /> : 'LOGIN'}
                    </Button>
                </form>

                <div className="space-y-2">
                    <AuthFooterItem>
                        Don’t have an account?{" "}
                        <Link to="/register" className="text-blue-600 hover:underline">
                            Register now
                        </Link>
                    </AuthFooterItem>
                    <AuthFooterItem>
                        Don't remember your password? {" "}
                        <Link to="/forgot-password" className="text-blue-600 hover:underline">
                            Reset password
                        </Link>
                    </AuthFooterItem>
                </div>

            </OnboardingPageWrapper >
        </div>

    );

}

export default LoginScreen;

