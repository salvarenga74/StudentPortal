import { split } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
    return (

        <div className="panel is-warning" style={{maxWidth:250}}>
            <p className="panel-heading">
                Subjects
            </p>
            <Link className="panel-block is-active" to="/History">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                History
            </Link>
            <Link className="panel-block" to="/Math">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Math
            </Link>
            <Link className="panel-block" to="/English">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                English
            </Link>
            <Link className="panel-block" to="/Science">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Science
            </Link>
            <Link className="panel-block" to="/AllMesages">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                All Messages
            </Link>
        </div>

    );
};

export default SideBar;