import LoginScreen from "@/screens/authentication/login";
import RegisterScreen from "@/screens/authentication/register";

export const routes = [
  {
    path: "/",
    element: <LoginScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/register",
    element: <RegisterScreen />,
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
];
