import type { RootState } from "@/app/store";
import { Input } from "@/components/ui/input";
import { useLazyGetCurrentUserQuery } from "@/services/auth";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Search } from 'lucide-react';


const Dashboard = () => {
    const [trigger, { data: currentUser, isLoading, error }] = useLazyGetCurrentUserQuery();

    const token = useSelector((state: RootState) => state.user.token);

    let letters = ''

    useEffect(() => {
        if (token) {
            trigger(); // token değiştiğinde currentUser fetch et
        }
    }, [token, trigger]);

    if (currentUser?.user) {
        letters = currentUser.user.username
            .split(" ")
            .map(name => name[0])
            .join(" ")
            .toUpperCase();

    }

    return (<div>
        {isLoading && <p className="text-black">Loading...</p>}
        {error && <p>Error fetching user!</p>}
        <div className="flex items-center gap-x-2.5">
            <h3 className="bg-pink-300 rounded-full font-bold text-[25px] w-20 h-20 flex items-center justify-center">
                {letters}
            </h3>
            <div className="flex flex-col">
                <p className="!text-xl">{currentUser?.user.username}</p>
                <span>X contacts</span>
            </div>


        </div>
        <div>
            <Input className="!border-none rounded-2xl bg-[#F0F0F0]" placeholder="Search..." prefix={<Search />} />
        </div>


    </div>);
}

export default Dashboard