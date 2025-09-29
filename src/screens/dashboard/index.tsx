import { useLazyGetCurrentUserQuery } from "@/services/auth";
import { useEffect } from "react";

const Dashboard = () => {

    const [trigger, { data: currentUser, isLoading, error }] = useLazyGetCurrentUserQuery();

    useEffect(() => {
        trigger();
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