import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt, FaCircle, FaPowerOff } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { Nav } from './styled';
import * as actions from '../../store/modules/auth/actions';
import history from '../../services/history';

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

   function handleLogout(e) {
     e.preventDefault();
     dispatch(actions.loginFailure());
     history.push('/login');
   }

  return (
    <Nav>
      <Link to="">
        <FaHome size={24} />
      </Link>
      <Link to="/register">
        <FaUserAlt size={24}/>
      </Link>

      {isLoggedIn ? (
        <Link onClick={handleLogout} to="/logout">
          <FaPowerOff size={24} />
        </Link>
      ) : (
      <Link to="/login">
        <FaSignInAlt size={24} />
      </Link>
      )}

      {isLoggedIn && <FaCircle size={24} color='#66ff33' />}
    </Nav>
  );
}

export default Header;
