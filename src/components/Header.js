import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    return(
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} alt="logo"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick = {() => {btnName == "Login" ? setbtnName("Logout") : setbtnName("Login");}}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

// Before importing it into App.js, we have to export it.

export default Header;