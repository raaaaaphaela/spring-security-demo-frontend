import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Auth from "./components/Auth";
import SpecialPage from "./pages/SpecialPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/login"} element={<LoginPage/>}/>
                <Route path={"/signup"} element={<SignUpPage/>}/>
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

        </BrowserRouter>
    );
}

export default App;
