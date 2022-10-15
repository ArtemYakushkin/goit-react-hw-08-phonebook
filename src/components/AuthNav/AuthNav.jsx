import { NavLink } from 'react-router-dom';
// import { AuthNavStyled } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavLink to="/register">Register</NavLink>|
      <NavLink to="/login">LogIn</NavLink>
    </div>
  );
};