import React, { Component } from 'react'
import './Home.css'
import Button from '../../components/Button/Button';
import cupcake2 from '../../img/cupcake2.png';
import cupcake3 from '../../img/cupcake3.jpg';
import cupcake4 from '../../img/cupcake4.jpg';
import cupcake5 from '../../img/cupcake5.jpg';
import cupcakeBox from '../../img/Cupcake-box.png'
import { NavLink } from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="Main">
                <div className='mainHome'>
                    <div className="mainText">
                        <h1 className='mainTitle' >Капкейки на заказ</h1>
                        <h3 className='mainSubtitle' >C Вкуснейшой начинкой</h3>
                        <p className='mainInfo' >Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iste quisquam obcaecati laudantium vero ipsa optio magni ad
                            deserunt, officiis commodi. Tenetur totam et perspiciatis!
                            Eaque magnam ipsa ex numquam cumque!</p>
                        <Button name='Хочу такой' />
                    </div>
                    <img src={cupcake2} alt="" className='mainCupcake' />
                </div>
                <div className="secondBlock">
                    <div className="secondText">
                        <div className="secondTitle">
                            <span className='secondTitlePink'>Выберите</span>
                            <span className='secondTitleBlack'>свой</span>
                        </div>
                        <p className='secondTextBlack'>Вкусный капкейк</p>
                    </div>
                    <div className="fillingButtons">
                        <button className='fillingButton'>Фруктовые</button>
                        <button className='fillingButton'>Шоколадные</button>
                        <button className='fillingButton'>Ванильные</button>
                        <button className='fillingButton'>С топингом</button>
                    </div>
                    <div className="cupcakePhotos">
                        <div className="cupcakeCard">
                            <div className="hoverText">
                                <img src={cupcake3} alt="" className='cupcakePhoto' />
                                <NavLink className='buyText' to='/photos'>Купить</NavLink>
                            </div>
                            <p className='cardText'>Очень вкусный капкейк с розовым кремом</p>
                            <h3 className='cardPrice'>50₽</h3>
                        </div>
                        <div className="cupcakeCard">
                            <div className="hoverText">
                                <img src={cupcake4} alt="" className='cupcakePhoto' />
                                <NavLink className='buyText' to='/photos'>Купить</NavLink>
                            </div>
                            <p className='cardText'>Очень вкусный капкейк с розовым кремом</p>
                            <h3 className='cardPrice'>50₽</h3>
                        </div>
                        <div className="cupcakeCard">
                            <div className="hoverText">
                                <img src={cupcake5} alt="" className='cupcakePhoto' />
                                <NavLink className='buyText' to='/photos'>Купить</NavLink>
                            </div>
                            <p className='cardText'>Очень вкусный капкейк с розовым кремом</p>
                            <h3 className='cardPrice'>50₽</h3>
                        </div>
                    </div>

                </div>
                <div className="thirdBlock">
                    <div className="orderText">
                        <h1 className="orderTitle">Закажите коробочку</h1>
                        <h3 className="orderSubtitle">С индивидуальными капкейками</h3>
                        <p className="orderDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatibus esse sequi eum velit deleniti aut? Et commodi temporibus sed corrupti exercitationem? Eos explicabo, beatae placeat quaerat dolorem dolor autem.</p>
                        <form action="">
                            <label htmlFor="fname"></label>
                            <input type="text" id="fname" name="fname" placeholder="Как к вам обращаться?" className="formName" /> <br />
                            <label htmlFor="fname"></label>
                            <input type="text" id="fname" name="fname" placeholder="+7 (000)000-00-00" className="formName" /> <br />
                            <Button name='Хочу такую' />
                        </form>
                    </div>
                    <img src={cupcakeBox} alt="" />
                </div>
            </div>
        )
    }
}
