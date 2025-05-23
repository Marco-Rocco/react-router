import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

function DefaultLayout() {
    return (
        <>
            <header><Navbar /></header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </>
    )
}

export default DefaultLayout