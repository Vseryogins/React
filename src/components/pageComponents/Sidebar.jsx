import React from 'react';

const Sidebar = () => {
    return(
        <div className="page__sidebar">
            <nav>
                <ul className="page__list">
                <li><a href="">News</a></li>
                <li><a href="">My Music</a></li>
                <li><a href="">My Video</a></li>
                <li><a href="">Messages</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;