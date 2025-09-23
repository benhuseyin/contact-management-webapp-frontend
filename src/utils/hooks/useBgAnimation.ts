import { useEffect, useState } from "react";

const useBgAnimation = () => {
    const [hasAnimation, setHasAnimation] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setHasAnimation(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return { hasAnimation };
};

export default useBgAnimation;
