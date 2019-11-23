import React, { Component } from 'react';
import {Banner} from "./Banner";
import Card from "react-bootstrap/Card";
import hotpot from "../Images/8pot.jpg"
import bbq from "../Images/bbq.jpg"
import ramen from "../Images/ramen.jpg"
import like from "../Images/like.svg"
import dislike from "../Images/dislike.svg"
import Recipe from "../Recipe";
import '../Stylesheets/Home.css';
import '../Stylesheets/Post.css';
import {FoodList} from "./FoodList";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Filter} from "./Filter";


class RecipePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render()
    {
        const meals=[new Recipe("/Recipe",{hotpot}, "8 Pots Mini Hot Pot"),
            new Recipe("/Recipe",{bbq}, "Picnic Garden BBQ Buffet"),
            new Recipe("/Recipe",{ramen}, "Ajisen Ramen"),

        ];
        document.body.style = 'background: #cce7daff';
        return(
            <div className={"home"} style={{backgroundColor:"#cce7daff"}}>




                <Banner/>

                <div className="column3">
                    <div className={"heading3"}>
                        8 Pots Mini Hot Pot
                    </div>
                    <div style={{float:"right",marginRight:80}}>
                        Published On: Nov 20, 2019
                        <img src={like} style={{width:60,height:60}} />
                        <img src={dislike} style={{width:60,height:60}} />

                    </div>
                    <img src={hotpot} style={{width:600,height:300}} className="img"/>
                    <div className={"heading4"}>
                        Located in Tsim Sha Tsui, the name of this restaurant literally translates to "8 Pot Stinky Stinky Hot Pot." Actually the hot pots are not stinky! The stink is from stinky tofu, which is a hugely popular food due to it’s pungent smell and the Taiwanese absolutely love it! Stinky tofu is used to represent Taiwan food in a cute manner, but the focus is on the hot pots, and customers can choose between 8 different ones.

                        <br/><br/>Each hot pot has it’s own special soup base and ingredients! The flavors include: The House Special Hot Soup, Taiwanese Spicy Hot Soup, Cheese Milk Hot Soup, Garlic Beef Hot Soup, Herbal Lamb Hot Soup, Sour Mustard Lamb Hot Soup, Tomato Pork Hot Soup, and Satay Beef Hot Soup.
                    </div>


                </div>

                <div className="column4" >
                    <div style={{fontFamily:"mansalva"}}>
                        GET IN TOUCH
                    </div>
                    <div style={{paddingTop:"10px"}}>
                        <a href="#" className="fa fa-facebook"></a>
                        <a href="#" className="fa fa-twitter"></a>
                        <a href="#" className="fa fa-linkedin"></a>
                        <a href="#" className="fa fa-google"></a>
                    </div>
                    <div style={{fontFamily:"mansalva",fontSize:17,marginTop:30}}>
                        Most Liked
                        <FoodList meals={meals}/>
                    </div>
                </div>


            </div>

        )

    }


}

export default RecipePage