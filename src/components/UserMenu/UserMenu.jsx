import { useDispatch, useSelector } from "react-redux";
import { getUser } from "redux/auth/authSelectors";
import { logOut } from "redux/auth/authThunk";

export const UserMenu = () => {

    const { name } = useSelector(getUser);
    const dispatch = useDispatch();

    const onLogOut = () => dispatch(logOut());

    return (
        <div>
            <span>Hello, {name} </span>
            <button type="button" onClick={ onLogOut }>Log Out</button>
        </div>
    );
}