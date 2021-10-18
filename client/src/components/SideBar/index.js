import { split } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (

        <div className="panel is-warning" style={{maxWidth:250, background: "white", border:"3px"}}>
            <p className="panel-heading">
                Subjects
            </p>
            <Link className="panel-block has-background-grey" to="/History">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                History
            </Link>
            <Link className="panel-block has-background-grey" to="/Math">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Math
            </Link>
            <Link className="panel-block has-background-grey" to="/English">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                English
            </Link>
            <Link className="panel-block has-background-grey" to="/Science">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Science
            </Link>
            <Link className="panel-block has-background-grey" to="/">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                All Messages
            </Link>
        </div>

    );
};

export default SideBar;