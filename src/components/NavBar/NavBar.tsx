import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from '../../styles/NavBar-styled';

export const NavBar = () => {
    return (
        <Nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
        </Nav>
    );
}