import React, { Component } from 'react';
import cupcake from '../../img/cupcake.png'
import './Footer.css'

class Footer extends Component {
    render() {
        return (
            <footer>
                <img src={cupcake} alt="" className='headerImage' />
                <p className='footerText'>Все права защищены</p>
                <div className='footerInfo'>
                    <p className='footerInfoText'>all_cupcakes@mail.com</p>
                    <p className='footerInfoText'>+7(000)000-00-00</p>
                </div>

            </footer>
        );
    }
}

export default Footer;