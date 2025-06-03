import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    return(
        <div className="header">
            <div>
                <Link to="/"><img className="logo" src={LOGO_URL} alt="logo"/> </Link>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to = "/">Home</Link></li>
                    <li><Link to = "/about">About</Link></li>
                    <li><Link to = "/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login-btn" onClick = {() => {btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// Before importing it into App.js, we have to export it.

export default Header;