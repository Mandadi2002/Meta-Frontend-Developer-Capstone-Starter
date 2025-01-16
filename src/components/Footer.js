import React from "react";
import logo from '../images/Logo .svg'


const Footer = () => {
    return (
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are family owned Medeterranern restarurent, focused on traditional receipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                       <li><a href='/'>Home</a></li>
                       <li><a href='/'>About</a></li>
                       <li><a href='/'>Menu</a></li>
                       <li><a href='/'>Reservations</a></li>
                       <li><a href='/'>Order Online</a></li>
                       <li><a href='/'>Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/> 123 Towncity, USA</li>
                        <li>Phone: <br/> ++ 0123 4560</li>
                        <li>Email: <br/> little@lemon.com</li>
                    </ul>
                </div>
            </section>
        </footer>
    );
};

export default Footer;