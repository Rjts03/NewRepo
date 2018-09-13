import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';


const linkarr = ["Men's Outerwear", "Ladies Outerwear", "Men's T-Shirts", "Ladies T-Shirts"];

export default class Posts extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            allposts : []
        };
    }

    componentDidMount() {
        
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then( (response) => response.json())
        .then( (data) => {
            this.setState({allposts : data}); 
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
                <div className="all-posts">
                    {this.state.allposts.map( item => 
                        <div className="post">
                            <Link to={'/data/userId/'+item.userId}><div className="field"><label>User id : </label>{item.userId}</div></Link>
                            <Link to={'/data/postsId/'+item.id}><div className="field"><label>Id : </label>{item.id}</div></Link>
                            <div className="field"><label>Title : </label>{item.title}</div>
                            <div className="field"><label>Body : </label>{item.body}</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}