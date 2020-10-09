import React, {Component} from 'react';
import './Header.css'

export default class Header extends Component {

    render(){
        return (
            <header className='header'>
                <h1>
                    Star Wars Search!
                </h1>
                <h3>
                    Search your favorite character
                </h3>
            </header>
        )
    }
}