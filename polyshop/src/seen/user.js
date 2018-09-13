import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class UserById extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            userposts : []
        };
    }

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/posts?userId="+this.props.match.params.id)
        .then( (response) => response.json())
        .then( (data) => {
            this.setState({userposts : data}); 
        })
        .catch( (e) => {
            alert(e);
        })

    }

    render () {
        return(
            <div>
                <Header/>
                <Nav links={linkarr}/>
                <div className="user-posts">
                    {this.state.userposts.map( item => 
                        <div className="post">
                            <div className="field"><label>User id : </label>{item.userId}</div>
                            <div className="field"><label>Id : </label>{item.id}</div>
                            <div className="field"><label>Title : </label>{item.title}</div>
                            <div className="field"><label>Body : </label>{item.body}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}