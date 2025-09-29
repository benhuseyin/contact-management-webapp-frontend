import type { RootState } from "@/app/store";
import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

const ProtectedLayout = ({ children }: Props) => {
    const token = useSelector((state: RootState) => state.user.user?.token);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};

export default ProtectedLayout;
