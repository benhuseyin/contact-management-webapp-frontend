import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import BgImage from "@/assets/images/LoginBackground.webp"

const LoginScreen = () => {
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

            <form className="space-y-5 z-50">
                <Input placeholder="E-mail" />
                <Input placeholder="********" />
                <Button>LOGIN</Button>
            </form>
        </div>
    );

}

export default LoginScreen;