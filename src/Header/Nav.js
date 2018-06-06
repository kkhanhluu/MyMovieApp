import React from 'react'; 

class Nav extends React.Component {
    render() {
        return(
            <nav className="navbar">
                <ul>
                    <li><a href="https://www.facebook.com/lun.ngom" target="_blank" rel="noopener noreferrer">Made by Kim Khanh Luu</a></li>
                    <li><a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">API: The Movie Database</a></li>
                </ul>
            </nav>
        ); 
    }
}
export default Nav; 