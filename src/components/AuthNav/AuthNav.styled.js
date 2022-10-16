import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapNavigation = styled.div`
    display: flex;
    gap: 40px;
`;

export const NavItem = styled(NavLink)`
    cursor: pointer;
    text-decoration: none;
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    font-weight: 400;
    color: #ffffff;
    
    &.active {
        color: #ffa200;
    }

    :hover:not(.active),
    :focus-visible:not(.active) {
        color: #ffa200;
    }
`;