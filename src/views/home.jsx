import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Nav from '../components/nav.jsx';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import {Link} from 'react-router'
import ListInit from '../components/lists.jsx'

class Index extends Component {
    render() {
        return (
            <div>
                <Nav></Nav>
                <ListInit></ListInit>
                {this.props.children}
            </div>
        )
    }
}




export default Index
