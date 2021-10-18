import React from "react";
import { Link } from "react-router-dom";

import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className=" text-light mb-4 py-3 flex-row align-center" style={{backgroundColor:"grey"}}>
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <div>
          <Link className="text-light" to="/">
            <h1 className="m-0" style={{textSizeAdjust:"20px"}}>Grace Preparatory School: Home Directory</h1>
          </Link>
          <p className="m-0" id="sub-heading">Online Student-Teacher Portal</p>
        </div>
        <div>
          {Auth.loggedIn() ? (
            <>
              <p id="username-display">
                Logged in as {Auth.getProfile().data.username}
              </p>
              <button className="button is-rounded" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="button is-rounded is-medium" to="/login">
                Login
              </Link>
              <Link className="button is-rounded is-medium" to="/signup">
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
