import React from 'react'
import {IndexLink} from 'react-router'

class test extends React.Component{
    render(){
        return(
            <div>
                <IndexLink to="/" activeClassName="active">home</IndexLink>
            </div>
        )
    }
}
export default test