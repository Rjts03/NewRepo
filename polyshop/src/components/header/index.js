import React from 'react';
import './index.css';
export default class Header extends React.Component {

    render() {
        return(
            <div className="app-header">
                <a href="/">S H O P</a>
                <img src="https://image.flaticon.com/icons/svg/60/60992.svg" alt="cartlogo"/>
            </div>
        );
    }
} 