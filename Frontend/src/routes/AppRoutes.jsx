import { Routes, Route } from "react-router-dom"
import Dashboard from "../components/Dashboard"
import NewAnalysis from "../components/NewAnalysis"


const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Dashboard />}
            />

            <Route
                path="/analysis/new"
                element={<NewAnalysis />}
            />

            <Route
                path="/history"
                element={<History />}
            />
        </Routes>
    )
}

export default AppRoutes
