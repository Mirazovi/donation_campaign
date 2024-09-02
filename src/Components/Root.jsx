import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";



const Root = () => {
    return (
        <div className="lg:w-[90%] m-auto">
            <Navbar></Navbar>
           
            <Outlet></Outlet>
        </div>
    );
};

export default Root;