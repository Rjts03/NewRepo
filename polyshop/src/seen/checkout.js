import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Input from '../components/Form';
import Address from '../components/Address';

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkbilladd: false
        };
        this.formInput = React.createRef();
        this.addrInput = React.createRef();
        this.billaddIn = React.createRef();
    }
    checkStatus = () => {
        (this.state.checkbilladd) ? this.setState({checkbilladd : false}) : this.setState({checkbilladd : true});
    }
    
    placeOrder = () => {
        const personalinfo = this.formInput.current.getPersonalInfo();
        const address = this.addrInput.current.getAddressInfo();
        this.formInput.current.validate(personalinfo);
        this.addrInput.current.validate(address);
        if ( this.state.checkbilladd )
        {
            const billaddress = this.billaddIn.current.getAddressInfo();
            this.billaddIn.current.validate(billaddress);
            console.log(billaddress);
        }
        console.log(personalinfo);
        console.log(address);
        
    }
    

    render() {
        return(
            <div className="app-checkout">
                <Header/>
                <Nav links={linkarr}/>
                <div className="app-form">
                    <Input ref={this.formInput}/>
                    <Address ref={this.addrInput} tag="Shipping Address"/>
                </div>
                <div className="check-box">
                    <input type="checkbox" onClick={this.checkStatus}/>
                    <p>Use different billing address</p>
                </div>
                { (this.state.checkbilladd) ? <div><Address ref={this.billaddIn} tag="Billing Address"/></div> : <div></div> }
                <button className="PO-btn" onClick={this.placeOrder}>Place Order</button>
            </div>
        );
    }
}