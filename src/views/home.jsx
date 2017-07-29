import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Nav from '../components/nav.jsx';
import {Link} from 'react-router'
class Index extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <ul role="nav">
                    <li><Link to="/Test1">Test1</Link></li>
                    <li><Link to="/Test2">Test2</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}




export default Index
