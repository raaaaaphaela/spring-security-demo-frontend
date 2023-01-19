import {useEffect, useState} from "react";
import axios from "axios";

export default function useAuth() {

    const [user, setUser] = useState<{username: string, role: string}|null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                const user = await axios.get("/api/app-users/me");
                setUser(user.data);
                console.log("user", user)
            } catch (e) {
                console.log("You are not logged in ..", e);
            } finally {
                setIsReady(true);
            }
        })();
    }, []);

    return {
        user,
        isReady
    }
}