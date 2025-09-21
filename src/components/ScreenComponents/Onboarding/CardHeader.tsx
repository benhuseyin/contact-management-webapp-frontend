interface Props {
    title: string;
    description: string;
}

const CardHeader = ({ title, description }: Props) => {
    return (
        <div className="space-y-2.5 z-50">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}

export default CardHeader;