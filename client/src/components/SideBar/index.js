import { split } from '@apollo/client';
import React from 'react';

const SideBar = () => {
    return (

        <div className="panel is-primary" style={{maxWidth:250}}>
            <p className="panel-heading">
                Primary
            </p>
            <a className="panel-block is-active">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                History
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Math
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                English
            </a>
            <a className="panel-block">
                <span className="panel-icon">
                    <i className="fas fa-book" aria-hidden="true"></i>
                </span>
                Science
            </a>
        </div>

    );
};

export default SideBar;