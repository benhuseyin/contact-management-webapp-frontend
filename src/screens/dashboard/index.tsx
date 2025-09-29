import { useLazyGetCurrentUserQuery } from "@/services/auth";
import { useEffect } from "react";

const Dashboard = () => {

    const [trigger, { data: currentUser, isLoading, error }] = useLazyGetCurrentUserQuery();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await trigger().unwrap(); // async/await ile tetikleme
            } catch (err) {
                console.error("Failed to fetch user", err);
            }
        };

        fetchUser();
    }, [trigger]);


    return (<div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error fetching user!</p>}
        {currentUser && <p>Welcome, {currentUser.user.username}</p>}
        dashboard
        test
    </div>);
}

export default Dashboard