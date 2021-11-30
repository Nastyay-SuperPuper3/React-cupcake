import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import cupcake from '../../img/cupcake.png'

export default class Header extends Component {
    render() {
        return (
            <header>
                <img src={cupcake} alt="" className='headerImage' />
                <div className='headerLinks'>
                    <NavLink className='headerLink' to='/'>Главная</NavLink>
                    <NavLink className='headerLink' to='/about'>О нас</NavLink>
                    <NavLink className='headerLink' to='/photos'>Фотографии</NavLink>
                    <NavLink className='headerLink' to='/map'>Карта</NavLink>
                </div>
            </header>
        )
    }
}
