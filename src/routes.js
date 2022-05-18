import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from './pages/MainPage';




export const useRoutes = (isAuthenticated) => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/" element={<Navigate to="/chat" />} />
                <Route path="/chat" exact element={<MainPage />} />
            </Routes>
        )
    }
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/chat" element={<Navigate to="/login" />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/register" exact element={<RegisterPage />} />
        </Routes>
    )

}