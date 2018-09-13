import React from 'react';
import './index.css';


export default class Nav extends React.Component {

    render() {
        return(
            <div className="app-nav">
                <div>
                    {this.props.links.map(item =>
                        <a href="/">{item}</a> 
                    )}
                </div>
            </div>
        );
    }
} 