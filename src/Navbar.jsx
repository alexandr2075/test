import React  from 'react';
import {NavLink} from "react-router-dom";


const Navbar = () => {
    return (
        <div >
            <div>
                <NavLink to = '/main'>Main</NavLink>
            </div>
            <div>
                <NavLink to = '/profile'>Profile</NavLink>
             </div>
        </div>
    )
}

export default Navbar;