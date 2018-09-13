import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Banner from '../components/banner';

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class Home extends React.Component {
    componentDidMount() {

    }

    render () {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <Banner src="https://shop.polymer-project.org/es6-unbundled/images/mens_outerwear.jpg" label="Men's Outerwear"/>
                <Banner src="https://shop.polymer-project.org/es6-unbundled/images/ladies_outerwear.jpg" label="Ladies Outerwear"/>
                <Banner src="https://shop.polymer-project.org/es6-unbundled/images/mens_tshirts.jpg" label="Kids Outerwear"/>
            </div>
        );
    }
}