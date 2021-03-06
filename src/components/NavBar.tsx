import React from 'react';


export const NavBar: React.FC = () => {
    return(
        <nav>
            <div className="nav-wrapper px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
            <li><a href="/">Список дел</a></li>
            <li><a href="/">Информация</a></li>
            <li><a href="/">React</a></li>
      </ul>
    </div>
        </nav>
    )
}