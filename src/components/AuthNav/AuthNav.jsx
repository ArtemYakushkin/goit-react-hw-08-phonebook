import { WrapNavigation, NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <WrapNavigation>
      <NavItem to="/register">Register</NavItem>
      <NavItem to="/login">LogIn</NavItem>
    </WrapNavigation>
  );
};