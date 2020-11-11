import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-2 my-2">
            <h4>
              <Link to="/signup">
                Signup
              </Link>
            </h4>
          </li>
          <li className="mx-2 my-2">
            <h4>
              <Link to="/login">
                Login
              </Link>
            </h4>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Link to="/">
        <img src='https://github.com/florhaidee/metalgifts/blob/master/client/public/Logo.png?raw=true' alt="icon" />
      </Link>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
