import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <div className="flex justify-between items-center my-4 py-3">
                <div>
                    <img className="w-[200px]" src="/public/imges/Logo.png" alt="" />
                </div>
                <div className="flex gap-6 text-xl font-bold">
                    <NavLink to={'/home'}>Home</NavLink>
                    <NavLink to={'/donation'}>Donation</NavLink>
                    <NavLink to={'/statistics'}>Statistics</NavLink>
                </div>
            </div>
        </>

    );
};

export default Navbar;