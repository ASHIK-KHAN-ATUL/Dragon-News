import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"

const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div className="div"></div>

            <div className="nav space-x-5 font-semibold">
                <Link to={'/'} >Home</Link>
                <Link to={'/about'} >About</Link>
                <Link to={'/career'} >Career</Link>
            </div>
            
            <div className="login">
                <div className=" flex space-x-3 justify-center items-center">
                    <img src={userIcon} alt="" />
                    <button className=" px-8 py-2 bg-[#403F3F] hover:bg-[#D72050] transition-all duration-300 hover:rounded-lg ease-in-out text-white font-semibold ">Login</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;