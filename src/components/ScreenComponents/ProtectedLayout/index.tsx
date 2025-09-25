import { useAppSelector } from "@/app/hooks";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: ReactNode
}

const ProtectedLayout = ({ children }: Props) => {
    const { user } = useAppSelector((state) => state.user)


    if (!user?.token) {
        return <Navigate to="/login" />
    } else {
        return <Navigate to="/dashboard" />

    }

    return children;
}

export default ProtectedLayout;