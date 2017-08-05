import React, { Component } from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import Nav from '../components/nav.jsx';

//css
import '../libs/stylesheets/sass/login.scss';
import image from '../libs/images/login.png';

const styleSheet = createStyleSheet(theme => ({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        minWidth: 200,
        width: "100%"
    },
    button: {
        width: '100%',
        margin: theme.spacing.unit,
    },
    loginForm: {
        top:0,
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 600,
        left: '50%',
        transform: 'translateX(-50%)'
    },
    loginButtom:{
        bottom: theme.spacing.unit,
        width: '100%',
        position: 'fixed',
        display: 'flex',
        flexWrap: 'wrap',
        maxWidth: 600,
        left: '50%',
        transform: 'translateX(-50%)'
    }
}));


class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Login Name',
        }
    }
    render() {
        const classes = this.props.classes;
        return (
            <div>
                <Nav></Nav>
                <div className={ classes.loginForm}>
                    <TextField
                        id="name"
                        label="Name"
                        className={classes.textField}
                        onChange={event => this.setState({ name: event.target.value })}
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    />
                </div>
                <div className="image">
                    <img src={image} />
                </div>
                <div className={classes.loginButtom}>
                    <Button raised color="primary" className={classes.button} >
                        Login
                    </Button>
                </div>
            </div>
        )
    }
}

Index.PropTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styleSheet)(Index)
