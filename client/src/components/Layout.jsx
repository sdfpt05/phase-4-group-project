import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"

export default function Layout() {
    return (
        <div className="wrapper">
            <Navbar />
            <main>
                <Outlet />
            </main>
        </div>
    )
}