import React, { Component } from 'react'
import './Photos.css'
import cupcake3 from '../../img/cupcake3.jpg'
import cupcake4 from '../../img/cupcake4.jpg'
import cupcake5 from '../../img/cupcake5.jpg'

export default class Photos extends Component {
    render() {
        return (
            <div>
                <div className="photosMain">
                    <div className="titleContainer">
                        <h1 className='photosTitlePink'>Наша</h1>
                        <h1 className='photosTitleBlack'>галерея</h1>
                    </div>
                    <div className="photoContainer">
                        <img src={cupcake3} alt="" className='photosCard' />
                        <img src={cupcake4} alt="" className='photosCard' />
                        <img src={cupcake5} alt="" className='photosCard' />
                    </div>
                    <div className="photoContainer">
                        <img src={cupcake3} alt="" className='photosCard' />
                        <img src={cupcake4} alt="" className='photosCard' />
                        <img src={cupcake5} alt="" className='photosCard' />
                    </div>
                    <div className="photoContainer">
                        <img src={cupcake3} alt="" className='photosCard' />
                        <img src={cupcake4} alt="" className='photosCard' />
                        <img src={cupcake5} alt="" className='photosCard' />
                    </div>
                    <div className="photoContainer">
                        <img src={cupcake3} alt="" className='photosCard' />
                        <img src={cupcake4} alt="" className='photosCard' />
                        <img src={cupcake5} alt="" className='photosCard' />
                    </div>
                </div>
            </div>
        )
    }
}