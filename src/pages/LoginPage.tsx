import React, {FormEvent, useCallback, useMemo, useState} from "react";
import {Link, useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";

export default function LoginPage() {

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value} = e.target;
            setCredentials({...credentials, [name]: value});
        },
        [credentials, setCredentials]
    );

    const [searchParams] = useSearchParams();
    const redirect = useMemo(() =>
            searchParams.get("redirect") || "/",
        [searchParams]
    );

    const navigate = useNavigate();
    const login = useCallback(
        async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            await axios.post("/api/app-users/login", null, {
                headers: {
                    "Authorization": "Basic " + window.btoa(`${credentials.username}:${credentials.password}`)
                }
            });
            navigate(redirect);
        },
        [credentials, navigate, redirect]
    );

    return (
        <div className={"LoginPage"}>
            <h1>Login</h1>
            <form onSubmit={login}>
                <div>
                    <input
                        type={"text"}
                        placeholder={"username"}
                        value={credentials.username}
                        name={"username"}
                        onChange={handleChange}/>
                </div>
                <div>
                    <input
                        type={"password"}
                        placeholder={"password"}
                        value={credentials.password}
                        name={"password"}
                        onChange={handleChange}/>
                </div>
                <div>
                    <button>Login</button>
                    or <Link to={"/signup"}>sign up here</Link>
                </div>
            </form>
        </div>
    )
}