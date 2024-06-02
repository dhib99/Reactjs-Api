import React from 'react';
import './Header.css';
 // Import the CSS file

export default function Header() {
    return (
        <div>
            <nav className="navigation"> {/* Use className instead of class */}
                <h1>Git Users</h1> 
            </nav>
        </div>
    );
}
