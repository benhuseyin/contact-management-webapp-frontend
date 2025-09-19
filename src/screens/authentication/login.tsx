import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BgImage from "@/assets/images/LoginBackground.webp"
import * as z from "zod";

export type LoginFormData = {
    email: string;
    password: string
}


const LoginScreen = () => {

    const LoginSchema = z.object({
        email: z.email({ pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i }),
        password: z.string()
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({ resolver: zodResolver(LoginSchema) });

    const submit = (data: LoginFormData) => {
        console.log(data);
    };

    return (
        <div className="flex flex-col gap-y-20">
            <img
                src={BgImage}
                alt="Login background"
                className="absolute left-1/2 top-1/2 -translate-1/2"
            />
            <div className="space-y-2.5 z-50">
                <h1>Welcome Back!</h1>
                <p>Enter Your Username & Password</p>
            </div>

            <form className="space-y-5 z-50" onSubmit={handleSubmit(submit)}>
                <Input name="email" placeholder="E-mail" />
                <Input placeholder="********" />
                <Button type="submit">LOGIN</Button>
            </form>
        </div>
    );

}

export default LoginScreen;

