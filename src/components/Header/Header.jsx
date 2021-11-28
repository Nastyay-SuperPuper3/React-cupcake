import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header>
                <NavLink className='headerLink' to='/'>Главная</NavLink>
                <NavLink className='headerLink' to='/'>О нас</NavLink>
                <NavLink className='headerLink' to='/'>Каталог</NavLink>
                <NavLink className='headerLink' to='/'>Карта</NavLink>    
            </header>
        )
    }
}
