import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    classNames?: string
    children: ReactNode
}

const OnboardingPageWrapper = ({ classNames, children }: Props) => {
    return (
        <div className={twMerge("border border-black z-50 p-10 rounded-sm space-y-10 shadow-lg backdrop-blur-xl !text-black max-w-[450px] !w-full", classNames)}>
            {children}
        </div>
    );
}

export default OnboardingPageWrapper;