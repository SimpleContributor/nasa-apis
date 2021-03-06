import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { UlStyles } from './style';

const StyledUl = styled.ul`${UlStyles}`;

//nav-list and nav-links
const NavLinks = ({ open, setOpen }) => {
    function handleClick() {
        setOpen(false)
    }

    return (
        <StyledUl open={open}>
            <Link to="/" className="nav-links" onClick={handleClick}>
                <li>Home</li>
            </Link>
            <Link to="/photo-of-the-day" className="nav-links" onClick={handleClick}>
                <li>Space Photos</li>
            </Link>
            <Link to="/about" className="nav-links" onClick={handleClick}>
                <li>About</li>
            </Link>
        </StyledUl>
    )
}

export default NavLinks;
