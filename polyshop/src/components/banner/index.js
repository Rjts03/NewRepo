import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

export default class Banner extends React.Component {


    render() {
        return(
            <div className="app-banner">
                <div>
                    <img src={this.props.src} alt="sda"></img>
                    <p>{this.props.label}</p>
                    <Link className="btn" to='/productlist'><button>SHOP NOW</button></Link>
                </div>
            </div>
        );
    }
} 
