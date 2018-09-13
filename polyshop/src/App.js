import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './seen/home';
import ProductList from './seen/product_list';
import ProductDetails from './seen/product_details';
import Checkout from './seen/checkout';
import Posts from './seen/data';
import UserById from './seen/user';
import PostsById from './seen/posts';
// import Temp from './seen/temp';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/productlist' component={ProductList}/>
              <Route path='/productdetails/:id' component={ProductDetails}/>
              <Route path='/checkout' component={Checkout}/>
              <Route path='/posts' component={Posts}/>
              <Route path='/data/userId/:id' component={UserById}/>
              <Route path='/data/postsId/:id' component={PostsById}/>
          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
