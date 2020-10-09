import React, {Component} from 'react'

export default class Results extends Component {
    render(){
        return(
            <li>
                <p>{this.props.name}</p>
            </li>
        )
    }
}