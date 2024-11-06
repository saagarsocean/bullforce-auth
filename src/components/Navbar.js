import React from 'react';
import { useNavigate } from 'react-router-dom';
import navbarLogo from '../images/navbar-logo.png';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <div className="bg-gray-900 fixed top-0 left-0 w-full z-10 h-16">
            <div className="relative h-full flex items-center">
                <img
                    src={navbarLogo}
                    alt="Navbar Logo"
                    className="h-12 object-contain absolute left-16 mt-1 cursor-pointer"
                    onClick={handleLogoClick}
                />
            </div>
        </div>
    );
};

export default Navbar;
