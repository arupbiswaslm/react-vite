import React from "react";

import UserProfile from "./UserProfile";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <UserProfile />
        </nav>
    );
}

export default Navbar;