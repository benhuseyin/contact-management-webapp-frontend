import type { ReactNode } from "react"

interface Props {
    children: ReactNode
}

const AuthFooterItem = ({ children }: Props) => {
    return <p>{children}</p>
}

export default AuthFooterItem 