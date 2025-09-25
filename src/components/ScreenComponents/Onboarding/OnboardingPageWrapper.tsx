import classNames from "classnames";
import type { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    wrapperClassNames?: string
    hasError?: boolean | undefined
    children: ReactNode
}

const OnboardingPageWrapper = ({ wrapperClassNames, hasError, children }: Props) => {
    return (
        <div className={classNames(twMerge("border border-black z-50 p-10 rounded-sm space-y-10 shadow-lg backdrop-blur-xl !text-black max-w-[450px] !w-full", wrapperClassNames), {
            'animate-fade-in': hasError
        })}>
            {children}
        </div>
    );
}

export default OnboardingPageWrapper;