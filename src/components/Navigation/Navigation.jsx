// import { Outlet } from 'react-router-dom';
// import { NavStyled } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <NavLink to="/home">Нome</NavLink>
      {isLogin && <NavLink to="/contacts">Contacts</NavLink>}
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};