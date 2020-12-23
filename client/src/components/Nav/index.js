import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1 my-1">
            <Link to="/orderHistory">
              Order History
            </Link>
          </li>
          <li className="mx-1 my-1">
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
          <li className="mx-1 my-1">
            <h4>
              <Link to="/signup">
                Signup
              </Link>
            </h4>
          </li>
          <li className="mx-1 my-1">
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
    <header className="flex-row px-2 py-2">
      <h1 className="mx-2 my-2">
        <Link to="/">
          Steel Gifts cm
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
