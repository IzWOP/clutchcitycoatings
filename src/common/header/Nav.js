import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="#">Home</Link>
                <ul className="submenu">
                    <li><Link >Random</Link></li>
                </ul>
            </li>
            
            <li><Link to="/about-us">About</Link></li>

            <li className="has-droupdown"><Link to="#">Blog</Link>
                <ul className="submenu">
                    <li><Link to="/blog-grid">Blog Grid</Link></li>
                    <li><Link to="/blog-grid-sidebar">Blog Grid Sidebar</Link></li>
                    <li><Link to="/blog-list-view">Blog List View</Link></li>
                    <li><Link to="/blog-list-sidebar">Blog List View Sidebar</Link></li>
                </ul>
            </li>

            <li className="has-droupdown"><Link to="/contact">Contact</Link></li>
        </ul>
    )
}
export default Nav;
