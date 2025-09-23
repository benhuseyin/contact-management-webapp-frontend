import { useEffect, useState } from "react"
import { Fragment } from "react/jsx-runtime"
import classNames from "classnames"

import BgImage from "@/assets/images/LoginBackground.webp"
import RedBgImage from "@/assets/images/RegisterBackground.webp"

const BackgroundImages = () => {
    const [hasAnimation, setHasAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimation(false);
        }, 5000);

        // cleanup
        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            <img
                src={BgImage}
                alt="Login background"
                className="absolute left-1/2 top-1/2 -translate-1/2 w-[350px] h-[350px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px]"
            />
            <img
                src={RedBgImage}
                alt="Login background"
                className={classNames("absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[350px] h-[350px] sm:w-[500px] sm:h-[600px] md:w-[600px] md:h-[700px]", {
                    "animate-spin": hasAnimation
                })}

            />
        </Fragment>
    )
}

export default BackgroundImages;
