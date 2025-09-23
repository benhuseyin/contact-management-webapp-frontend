import classNames from "classnames"
import useBgAnimation from "@/utils/hooks/useBgAnimation"
import { twMerge } from "tailwind-merge"

interface Props {
    wrapperClassNames?: string
    imgSrc: string
}

const BackgroundImage = ({ wrapperClassNames, imgSrc }: Props) => {
    const { hasAnimation } = useBgAnimation()

    return <img
        src={imgSrc}
        alt="Login background"
        className={twMerge(classNames("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  w-[350px] h-[350px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px]", {
            "animate-spin": hasAnimation
        }), wrapperClassNames)}
    />
}

export default BackgroundImage;
