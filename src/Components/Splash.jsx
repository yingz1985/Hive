import React from "react";

import more from "../Images/more.svg"
import '../Stylesheets/splash.css';
import {Redirect} from "react-router";

class Splash extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            redirectHome:false
        }

    }

    setRedirectHome = () => {
        this.setState({
            redirectHome: true
        })
    }
    renderRedirectHome = () => {
        if (this.state.redirectHome) {
            return <Redirect to='/Home' />
        }
    }


    render() {
        return (

            <div>
                <div className="clearBackground">
                    <div className="bottom">discover more</div>
                    <img className="pulse" src={more}/>
                </div>
                <div className="container">
                    <div id="background-wrap">
                        <div className="burger x1">
                            <img
                                src="http://www.myiconfinder.com/uploads/iconsets/256-256-50d2bb24a01a3c32510470c6cf675782-burger.png"/>
                        </div>
                        <div className="burger x2">
                            <img style={{width:"200px",height:"200px"}}
                                 src="https://cdn0.iconfinder.com/data/icons/chinese-new-year-3-filled/64/China-05-512.png"/>
                        </div>

                        <div className="heart x3"></div>
                        <div className="heart x4"></div>
                        <div className="heart x5"></div>
                        <div className="heart x6"></div>
                        <div className="heart x7"></div>
                        <div className="heart x8"></div>
                        <div className="heart x9"></div>
                        <div className="heart x10"></div>
                        <div className="burger x11">
                            <img src="https://image.flaticon.com/icons/svg/184/184251.svg"/>
                        </div>
                        <div className="burger x12">
                            <img style={{width:"300px",height:"300px"}}
                                 src="https://cdn1.iconfinder.com/data/icons/beverage-filled-outline-1/64/bubble-tea-boba-milk-beverage-512.png"/>
                        </div>
                        <div className="burger x13">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/birthday-30/64/pizza_food_slice_piece_fast_-512.png"/>
                        </div>
                        <div className="burger x14">
                            <img
                                src="https://cdn1.iconfinder.com/data/icons/fast-food-yellow-shadow-set/512/Fried_Chicken_Gift-512.png"/>
                        </div>
                        <div className="burger x15">
                            <img src="https://img.icons8.com/cotton/2x/steak.png"/>
                        </div>
                        <div className="heart x3"/>
                        <div className="heart x4"/>
                        <div className="heart x5"/>
                        <div className="heart x6"/>
                        <div className="heart x7"/>
                        <div className="heart x8"/>
                        <div className="heart x9"/>
                        <div className="heart x10"/>


                    </div>
                </div>

            </div>
        )
    }
}

export default Splash;