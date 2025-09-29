import type { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode;
}

const ProtectedLayout = ({ children }: Props) => {
    const token = useSelector((token) => token);

    if (!token) {
        return <Navigate to="/login" replace />; // token yok → login’e git
    }

    return <>{children}</>;
};

export default ProtectedLayout;
