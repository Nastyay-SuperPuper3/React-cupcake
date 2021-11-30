import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Button.css'

class Button extends Component {
    render() {
        return (
            <NavLink className='buttonMain' to='/photos'>{this.props.name}</NavLink>
        );
    }
}

export default Button;