import { WrapNavigation } from './Navigation.styled';
import { useSelector } from 'react-redux';
import { isAuth } from 'redux/auth/authSelectors';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  const isLogin = useSelector(isAuth);

  return (
    <>
      <WrapNavigation>
        <NavItem to="/home">Нome</NavItem>
        {isLogin && <NavItem to="/contacts">Contacts</NavItem>}
      </WrapNavigation>
      {isLogin ? <UserMenu /> : <AuthNav />}
    </>
  );
};