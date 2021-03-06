import React,{Component} from 'react';
import {Router,Route,browserHistory,IndexRoute,Redirect} from 'react-router';
import App from './App.jsx';
import Home from './Home.jsx';
import MovieList from './MovieList.jsx';

export default class MyRouter extends Component{
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} />
                    <Route path='home' component={Home} />
                    <Redirect path='movieList/:movieType' to='movieList/:movieType/1' />
                    <Route path='movieList/:movieType/:page' component={MovieList} />
                </Route>
            </Router>
        )
    }
}