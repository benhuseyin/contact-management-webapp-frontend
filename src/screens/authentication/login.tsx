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
import { useLoginUserMutation } from "@/services/auth";
import { useAppDispatch } from "@/app/hooks";
import { setUser } from "@/features/user/user";
import { LoaderCircle, TriangleAlert } from "lucide-react";

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
                token: result.accessToken
            }));

            navigate("/dashboard");
        } catch (err) {
            console.error(err)
        }
    };


    return (
        <div className="flex">

            <BackgroundImage wrapperClassNames="rotate-90" imgSrc={BgImage} />

            <OnboardingPageWrapper classNames="sm:!w-[450px]">
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

                    {error && <p className="text-red-500 text-sm p-5 bg-[#FDD1DF] border border-red-300 rounded-sm flex justify-center items-center gap-x-2.5"><TriangleAlert size={16} /> {error.data.message}</p>}

                    <Button type="submit" className="mt-2.5">
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

