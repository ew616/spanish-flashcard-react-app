import React, { useState } from "react";
import { Link } from 'react-router-dom';


function Nav() {
    return (
        <nav>

            <ul className='nav-links'>
                <Link to='/TestYourself'>
                <li>Test Yourself</li>
                </Link>

                <Link to='/AddingToBankRoute'>
                <li>Add Words to Bank</li>
                </Link>
            </ul>
        </nav>
    )

}

export default Nav;