import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];
export default class ProductDetails extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }

    render () {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <div className="prod-desc">
                    <h2>product ID : # { this.props.match.params.id }</h2>
                </div>
                
            </div>
        );
    }
}