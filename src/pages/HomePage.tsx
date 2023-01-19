import LogoutButton from "../components/LogoutButton";
import {useEffect} from "react";
import getMe from "../hooks/getMe";

export default function HomePage() {

    useEffect(() => {
        (async () => {
            const user = await getMe();
            console.log("Logged in user: ", user);
            if (user.role === "BASIC") {
                console.log("Logged in as basic user...");
            }
        })();
    }, []);

    return (
        <div>
            Hooooomepage...
            <LogoutButton/>
        </div>
    )
}