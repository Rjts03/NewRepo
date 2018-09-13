import React from 'react';
import './index.css';

export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            mobilenumber: '',
            isFnfilled: true,
            isLnfilled: true,
            isMnfilled: true
        };
    }

    getPersonalInfo = () => {
        
        return this.state;
    }  

    validate = () => {
        const { firstname, lastname, mobilenumber } = this.state;

        if ( firstname!=='' ) {
            this.setState({isFnfilled : true});
        }
        else {
            this.setState({isFnfilled : false});
        }

        if ( lastname!=='' ) {
            this.setState({isLnfilled : true});
        }
        else {
            this.setState({isLnfilled : false});
        }

        if ( mobilenumber!=='' ) {
            this.setState({isMnfilled : true});
        }
        else {
            this.setState({isMnfilled : false});
        }
    }
    
    render() {
        return( 
            <div className = "input-form">
                <div className="tag">Personal Details</div>
                <div className="input-wrap">
                    <input name="First Name *" placeholder="firstname" value={this.state.firstname} onChange={(e) =>  this.setState( {firstname: e.target.value} ) }/>
                    { !(this.state.isFnfilled) ? <div className="alert-msg">This field is reqired</div> : <div></div> }
                </div>
                <div className="input-wrap">
                    <input name="Last Name *" placeholder="lastname" value={this.state.lastname} onChange={(e) =>  this.setState( {lastname: e.target.value} ) }/>
                    { !(this.state.isLnfilled) ? <div className="alert-msg">This field is reqired</div> : <div></div> }
                </div>
                <div className="input-wrap">
                    <input name="Mobile Number *" placeholder="mobile number" value={this.state.mobilenumber} onChange={(e) =>  this.setState( {mobilenumber: e.target.value} ) }/>
                    { !(this.state.isMnfilled) ? <div className="alert-msg">This field is reqired</div> : <div></div> }
                </div>
            </div>
        );
    }
}