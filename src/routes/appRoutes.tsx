import ProtectedLayout from "@/components/ScreenComponents/ProtectedLayout";
import LoginScreen from "@/screens/authentication/login";
import RegisterScreen from "@/screens/authentication/register";
import Dashboard from "@/screens/dashboard";

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
    path: "/dashboard",
    element: (
      <ProtectedLayout>
        <Dashboard />
      </ProtectedLayout>
    ),
  },
  {
    path: "*",
    element: <div>404 - Not Found</div>,
  },
];
