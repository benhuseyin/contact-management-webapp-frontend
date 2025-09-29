import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return <Navigate to="/login" />
    } else {
        return <Navigate to="/dashboard" />
    }

    return children;
}

export default ProtectedLayout;