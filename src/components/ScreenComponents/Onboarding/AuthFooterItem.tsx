import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const AuthFooterItem = ({ children }: Props) => {
    return <p className="text-sm text-center">{children}</p>
}

export default AuthFooterItem 