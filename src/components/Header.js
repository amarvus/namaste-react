import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);
    //console.log(loggedInUser);
    

    return(
        <div className="flex h-30 justify-between bg-yellow-50 shadow-lg">
            <div>
                <Link to="/"><img className="w-30" src={LOGO_URL} alt="logo"/> </Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="p-4"><Link to = "/">Home</Link></li>
                    <li className="p-4"><Link to = "/about">About</Link></li>
                    <li className="p-4"><Link to = "/contact">Contact Us</Link></li>
                    <li className="p-4"><Link to = "/grocery">Grocery</Link></li>
                    <li className="p-4">Cart</li>
                    <button className="login-btn cursor-pointer" onClick = {() => {btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");}}>{btnName}</button>
                    {/* <li className="p-4 font-bold"> {loggedInUser} </li> */}
                </ul>
            </div>
        </div>
    )
}

// Before importing it into App.js, we have to export it.

export default Header;