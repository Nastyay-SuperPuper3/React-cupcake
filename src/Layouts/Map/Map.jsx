import React, { Component } from 'react'
import './Map.css'
import MapComponent from '../../components/MapComponent/MapComponent'

export default class Photos extends Component {
    render() {
        return (
            <div>
                <div className="mapBlock">
                    <h1 className='mapTitle'>Где нас найти</h1>
                    <div className="mapTextBlock">
                        <p className='mapText'>г.Москва Чертановская ул., 43, корп. 3-5</p>
                        <p className='mapText'>all_cupcakes@mail.com</p>
                        <p className='mapText'>+7(000)000-00-00</p>
                    </div>
                    <div className="map">
                        <MapComponent addressInput='' />
                    </div>
                </div>
            </div>
        )
    }
}