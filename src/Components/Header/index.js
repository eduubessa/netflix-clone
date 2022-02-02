import React from 'react';
import './header.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default ({fixed}) => {
    return (
        <header className={fixed ? 'header-fixed' : ''}>
            <div className="header-brand">
                <a href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="logo" />
                </a>
            </div>
            <div className="header-user">
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Eduardo Bessa"/>
            </div>
        </header>
    )
};