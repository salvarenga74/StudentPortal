import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="has-background-grey text-light mb-4 py-3 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0">Grace Preparatory School</h1>
          </Link>
          <p className="m-0">Online Student-Teacher Portal</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="button is-warning is-rounded" to="/me">
                {Auth.getProfile().data.username}'s profile
              </Link>
              <button className="button is-warning is-rounded" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button is-warning is-rounded is-medium" to="/login">
                Login
              </Link>
              <Link className="button is-warning is-rounded is-medium" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
