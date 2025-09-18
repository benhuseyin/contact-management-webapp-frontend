import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginScreen = () => {
    return (
        <div className="flex flex-col gap-y-20">
            <div className="space-y-2.5">
                <h1>Welcome Back!</h1>
                <p>Enter Your Username & Password</p>
            </div>

            <form className="space-y-5">
                <Input placeholder="E-mail" />
                <Input placeholder="********" />
                <Button>LOGIN</Button>
            </form>
        </div>

    );

}

export default LoginScreen;