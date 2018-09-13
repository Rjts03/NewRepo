import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../components/header';
import Nav from '../components/nav';


const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];
const productList = [ { "name":"abc", "id":"p01", "price":"2500" }, { "name":"def", "id":"p02", "price":"2500" }, 
                      { "name":"ghi", "id":"p03", "price":"2500" }, { "name":"jkl", "id":"p04", "price":"2500" },
                      { "name":"mno", "id":"p05", "price":"2500" }, { "name":"pqr", "id":"p06", "price":"2500" } ];

export default class ProductList extends React.Component {
    componentDidMount() {

    }

    
    render () {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <div className="banner">
                    <img src="https://shop.polymer-project.org/es6-unbundled/images/mens_outerwear.jpg" alt="dsas"></img> 
                    <p>Men's Outerwear</p>
                    <p id="count">{productList.length} items</p>
                </div>
                <div className="prod-list">
                    {productList.map( item => 
                    <Link to={'/productdetails/' + item.id}>
                        <div className = "list-item"> 
                            <img src="https://shop.polymer-project.org/es6-unbundled/data/images/10-15068B.jpg" alt="sdasd"></img>
                            <p>{item.name}</p>
                            <p>{item.price}</p>
                        </div>
                    </Link> 
                    )}
                </div>
            </div>
        );
    }
}