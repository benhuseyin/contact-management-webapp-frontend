import { TriangleAlert } from "lucide-react";

interface Props {
    errorMessage: string | undefined;
}

const BackendErrorItem = ({ errorMessage }: Props) => {
    if (!errorMessage) return null;

    return <p className="text-red-500 text-sm p-5 bg-[#FDD1DF] border border-red-300 rounded-sm flex justify-center items-center gap-x-2.5" >
        <TriangleAlert size={16} />{errorMessage}
    </p>
}

export default BackendErrorItem;