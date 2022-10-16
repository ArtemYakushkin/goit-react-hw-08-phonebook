import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authThunk";
import { WrapUserMenu, BtnLogOut, TextUserMenu, NameUser } from "./UserMenu.styled";

export const UserMenu = () => {

    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => dispatch(logOut());

    return (
        <WrapUserMenu>
            <TextUserMenu>Hello, <NameUser>{name}!</NameUser></TextUserMenu>
            <BtnLogOut type="button" onClick={ onLogOut }>Log Out</BtnLogOut>
        </WrapUserMenu>
    );
}