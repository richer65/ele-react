import React from 'react'
import {IndexLink} from 'react-router'
import { connect } from 'react-redux'


class test extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <IndexLink to="/" activeClassName="active">home</IndexLink>
            </div>
        )
    }
}
export default test