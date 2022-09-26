import { iNavBarOption } from './NavBar.interfaces';
import { useAppDispatch, useAppSelector } from '../../redux/app/hooks';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../../redux/features/auth/auth-slice';

/**
 * Single NavBarOption, checks if user is logged in or not to display an option
 * @param option
 * @param to
 * @param displayIfLoggedIn
 * @constructor
 */
export default function NavBarOption({ option, to, displayIfLoggedIn }: iNavBarOption) {
  // redux
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.auth.token);
  const location = useLocation();
  // init
  let isActive = '';
  if (to === location.pathname) {
    isActive = 'active';
  }
  //
  if (typeof displayIfLoggedIn === 'boolean') {
    if (displayIfLoggedIn && !isLoggedIn) {
      return <></>;
    }
    if (isLoggedIn && !displayIfLoggedIn) {
      return <></>;
    }
  }
  //
  if (to === '/logout') {
    return (
      <li
        onClick={() => {
          dispatch(logout());
        }}
      >
        <span className="nav-link nav-link-clickable">{option}</span>
      </li>
    );
  }
  //
  return (
    <li>
      <Link to={to} className={'nav-link ' + isActive}>
        {option}
      </Link>
    </li>
  );
}
