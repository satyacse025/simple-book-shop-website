import { Outlet } from "react-router-dom";
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CommonLayout() {
    return (

        <div className=" bg-[#FECD66]">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}
