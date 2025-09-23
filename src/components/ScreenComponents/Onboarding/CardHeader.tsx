import { twMerge } from "tailwind-merge";

interface Props {
    classNames?: string;
    title: string;
    description: string;
}

const CardHeader = ({ classNames, title, description }: Props) => {
    return (
        <div className={twMerge("space-y-2.5 z-50", classNames)}>
            <h1>{title}</h1>
            <p className="sm:max-w-[80%] sm:mx-auto">{description}</p>
        </div>
    )
}

export default CardHeader;