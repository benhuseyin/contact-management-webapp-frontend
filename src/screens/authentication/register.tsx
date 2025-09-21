const RegisterScreen = () => {
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
                className={classNames("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90", {
                    "animate-spin": hasAnimation
                })}
            />


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

export default RegisterScreen;