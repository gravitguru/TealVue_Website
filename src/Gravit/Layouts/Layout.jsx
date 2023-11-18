import React, { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
   

    return (
        <div className="">
            <Navbar />
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto"> 
                {children}
                <Footer />
            </div>
            
        </div>
    );
};

export default Layout;
