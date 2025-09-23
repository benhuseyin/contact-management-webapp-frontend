import { useAppSelector } from "@/app/hooks";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
    const { isAuthenticated } = useAppSelector((state) => state.user)

    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }

    return children;
}

export default ProtectedLayout;