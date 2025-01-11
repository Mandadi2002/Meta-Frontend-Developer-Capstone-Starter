import React from 'react';
import logo from '../images/Logo .svg'

const Nav = () => {
    return (
        <nav>
            <a href='/'>
            <img src={logo} alt='logo'/>
            </a> 

            <div>
                <div clssmate='bar'></div>
                <div clssmate='bar'></div>
                <div clssmate='bar'></div>
            </div>

            <ul>
                <li>
                <a href="/">Home</a>  
                </li>
                <li>
                <a href="/">About</a>
                </li>
                <li>
                <a href="/">About</a>
                </li>
                <li>
                <a href="/">About</a>
                 </li>
                <li>
                <a href="/">Order Online</a>
                </li>
                <li>
                <a href="/">Login</a>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
