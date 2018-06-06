import React from 'react'; 
import Nav from './Nav.js'; 
import {Link} from 'react-router-dom'; 
import './Header.css'; 
import logo from '../logo.svg'; 

class Header extends React.Component {
    render() {
        return(
            <header>
                <Link to={"/"}><h1><img src={logo} alt="My Movie App logo" />My Movie App</h1></Link>
                <Nav />
            </header>
        ); 
    }
}

export default Header; 