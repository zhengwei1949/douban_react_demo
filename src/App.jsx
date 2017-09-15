import React,{Component} from 'react';
import {Link} from 'react-router';
export default class App extends Component{
    render(){
        return (
            <div>
            <div className="top">
                <div className="header">
                    <a href="#/home_page"><img src="/img/logo.png" alt="aaa" /></a>
                    <div className="search">
                        <input className="my-input" type="text" placeholder="电影搜索" />
                        <button>搜索</button>
                    </div>
                </div>
                <nav className="nav">
                    <ul>
                        <li className="active"><Link to="/home">首页</Link></li>
                        <li><Link to="/movieList/in_theaters">正在热映</Link></li>
                        <li><Link to="/movieList/coming_soon">即将上映</Link></li>
                        <li><Link to="/movieList/top250">Top250</Link></li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                {this.props.children}
                </div>
                <footer className="footer">
                    <div className="container">
                        <p>版权所有&copy; 前端与移动开发学院 火骑士空空(允许侵权)</p>
                    </div>
                </footer>
            </div>
        )
    }
}