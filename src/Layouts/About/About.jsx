import React, { Component } from 'react'
import './About.css'
import cupcakeCook from '../../img/cupcake-cook.jpg'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="aboutMain">
                    <img src={cupcakeCook} alt="" className='aboutPhoto' />
                    <div className="abotText">
                        <div className="aboutTitle">
                            <h1 className='aboutTitlePink'>Самые</h1>
                            <h1 className='aboutTitleBlack'>вкусные</h1>
                        </div>
                        <p className='aboutSubtitle'>капкейки только у нас</p>
                        <p className='aboutTextBlack'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vero aut, labore deleniti praesentium, temporibus tempora nesciunt sint sed magnam, ipsa mollitia laborum suscipit error eos dolorum officiis obcaecati aliquid.
                            Dolorum dolorem porro in, illo obcaecati temporibus quam voluptates aliquid deleniti nihil, facilis eligendi similique alias illum error? Alias rerum cupiditate adipisci laborum nulla sequi explicabo maxime laudantium iusto non.
                            Aspernatur unde illo ut nam voluptates dignissimos voluptatibus quaerat. Voluptatibus dolorum aspernatur ducimus magnam eos, praesentium, nulla quam itaque cupiditate incidunt iste cumque sed non quibusdam obcaecati! Deleniti, tempore veritatis.</p>
                    </div>
                </div>
                <div className="aboutMain">
                    <div className="abotText">
                        <div className="aboutTitle">
                            <h1 className='aboutTitlePink'>Самые</h1>
                            <h1 className='aboutTitleBlack'>вкусные</h1>
                        </div>
                        <p className='aboutSubtitle'>капкейки только у нас</p>
                        <p className='aboutTextBlack'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vero aut, labore deleniti praesentium, temporibus tempora nesciunt sint sed magnam, ipsa mollitia laborum suscipit error eos dolorum officiis obcaecati aliquid.
                            Dolorum dolorem porro in, illo obcaecati temporibus quam voluptates aliquid deleniti nihil, facilis eligendi similique alias illum error? Alias rerum cupiditate adipisci laborum nulla sequi explicabo maxime laudantium iusto non.
                            Aspernatur unde illo ut nam voluptates dignissimos voluptatibus quaerat. Voluptatibus dolorum aspernatur ducimus magnam eos, praesentium, nulla quam itaque cupiditate incidunt iste cumque sed non quibusdam obcaecati! Deleniti, tempore veritatis.</p>
                    </div>
                    <img src={cupcakeCook} alt="" className='aboutPhoto' />
                </div>
                <div className="aboutMain">
                    <img src={cupcakeCook} alt="" className='aboutPhoto' />
                    <div className="abotText">
                        <div className="aboutTitle">
                            <h1 className='aboutTitlePink'>Самые</h1>
                            <h1 className='aboutTitleBlack'>вкусные</h1>
                        </div>
                        <p className='aboutSubtitle'>капкейки только у нас</p>
                        <p className='aboutTextBlack'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis vero aut, labore deleniti praesentium, temporibus tempora nesciunt sint sed magnam, ipsa mollitia laborum suscipit error eos dolorum officiis obcaecati aliquid.
                            Dolorum dolorem porro in, illo obcaecati temporibus quam voluptates aliquid deleniti nihil, facilis eligendi similique alias illum error? Alias rerum cupiditate adipisci laborum nulla sequi explicabo maxime laudantium iusto non.
                            Aspernatur unde illo ut nam voluptates dignissimos voluptatibus quaerat. Voluptatibus dolorum aspernatur ducimus magnam eos, praesentium, nulla quam itaque cupiditate incidunt iste cumque sed non quibusdam obcaecati! Deleniti, tempore veritatis.</p>
                    </div>
                </div>




            </div>
        )
    }
}