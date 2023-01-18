import {Route, Routes, useSearchParams} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Auth from "./components/Auth";
import HomePage from "./pages/HomePage";
import SpecialPage from "./pages/SpecialPage";
import React, {useMemo} from "react";
import NoAuth from "./components/NoAuth";

export default function Root() {

    const [searchParam] = useSearchParams();
    const redirect = useMemo(() => searchParam.get("redirect") || "/",
        [searchParam]
    );

    return (
        <Routes>
            <Route path={"/login"} element={
                <NoAuth redirect={redirect}>
                    <LoginPage/>
                </NoAuth>
            }/>
            <Route path={"/signup"} element={
                <NoAuth redirect={redirect}>
                    <SignUpPage/>
                </NoAuth>
            }/>
            <Route path={"/"} element={
                <Auth>
                    <HomePage/>
                </Auth>
            }/>
            <Route path={"/special"} element={
                <Auth>
                    <SpecialPage/>
                </Auth>
            }/>
        </Routes>
    )
}