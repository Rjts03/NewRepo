import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';

const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class UserById extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            postlist : []
        };
    }

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/comments?postId="+this.props.match.params.id)
        .then( (response) => response.json())
        .then( (data) => {
            this.setState({postlist : data}); 
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
                <div className="all-posts-for-id">
                    {this.state.postlist.map( item => 
                        <div className="post">
                            <div className="field"><label>Post id : </label>{item.postId}</div>
                            <div className="field"><label>Id : </label>{item.id}</div>
                            <div className="field"><label>Name : </label>{item.name}</div>
                            <div className="field"><label>email : </label>{item.email}</div>
                            <div className="field"><label>Body : </label>{item.body}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}