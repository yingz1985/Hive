import React, { Component } from 'react';
import {Banner} from "./Banner";
import Card from "react-bootstrap/Card";
import hotpot from "../Images/8pot.jpg"
import bbq from "../Images/bbq.jpg"
import ramen from "../Images/ramen.jpg"
import me from "../Images/me.png"
import about_icon from "../Images/about_icon.svg"
import more from "../Images/more.svg"
import {RecipeItem} from "./RecipeItem";
import {Post} from "./Post";
import Recipe from "../Recipe";
import '../Stylesheets/Home.css';
import '../Stylesheets/Post.css';
import {FoodList} from "./FoodList";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Filter} from "./Filter";


class AboutMe extends Component {
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
                    <div className={"heading"}>
                        MEET YING
                    </div>
                    <img src={me} style={{width:600,height:300}} className="heading"/>
                    <div className={"heading"}>
                        WHO AM I
                    </div>
                    <div className={"heading1"}>
                        Ying is a computer science student at Stony Brook University who aspires to incorporate her fondness for the arts into her professional career.
                        She has good tastes and loves good food.
                         Ying is looking for opportunities to create user-friendly softwares that are not only robust, but also aesthetically pleasing.
                    </div>
                    <div className={"heading"}>
                        WHY HIVE
                    </div>
                    <div className={"heading1"}>
                        Because I like honey water...
                        The idea for “Hive” came from the fact that in real life, hive acts as a warehouse/storage for the bees.
                        I’m abstracting myself as the worker bee that gathers and stores ideas in the food ‘hive’.
                        The general color scheme I chose specifically resonates with the idea of a bee hive.
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

export default AboutMe