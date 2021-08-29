import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui fixed menu">
            <div className="ui container center">
                <Link to="/"><strong><h3>TakeShop</h3></strong></Link>
            </div>
        </div>
    );
};

export default Header;