import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <footer className="w-100 mt-auto bg-secondary p-4" style={{backgroundColor:"grey"}}>
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            style={{borderRadius:"5px",  }}
            className="button is-rounded"
            onClick={() => history.goBack()}
          >
            &larr; Go Back
          </button>
        )}
        <h4 style={{textAlign:"center", color: "white"}}>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by Eric, Sally and Zack.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
