import React, { Component } from 'react';
import {Banner} from "./Banner";
import Card from "react-bootstrap/Card";
import hotpot from "../Images/8pot.jpg"
import bbq from "../Images/bbq.jpg"
import ramen from "../Images/ramen.jpg"
import about_icon from "../Images/about_icon.svg"
import more from "../Images/more.svg"
import {RecipeItem} from "./RecipeItem";
import {Post} from "./Post";
import Recipe from "../Recipe";
import '../Stylesheets/Home.css';
import '../Stylesheets/Post.css';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render()
    {
        const meals=[new Recipe("/Recipe",{hotpot}, "8 Pots Mini Hot Pot"),
            new Recipe("/Recipe",{bbq}, "Picnic Garden BBQ Buffet"),
            new Recipe("/Recipe",{ramen}, "Ajisen Ramen"),

        ]
        console.log(meals)


        return(
            <div className={"home"}>
            <Banner/>

            <div className={"heading"}>
                Visit This for <div style={{display:"inline-block",color:"orange"}}>
                Lunch
            </div>
            </div>
                <div style={{marginLeft:"150px"}}>

                <RecipeItem meals={meals}/>
                </div>

                <div className={"heading"}>
                    Hey!Welcome to my blog
                </div>
                <div style={{backgroundColor:"#f6f9e4ff",marginLeft:"150px",marginRight:"220px",paddingBottom:"10px"}}>
                    <img src={about_icon} className={"head_icon"} />

                    <div className="intro" >
                    I’m Ying: student at Stony Brook University,
                        and also creator of this fantastic thing.<br/>
                    Favorite things include UI/UX design, finding good restaurants, and Netflix
                    </div>
                    <div className={"right"}>
                        <span style={{bottom:"20px"}}>LEARN MORE</span>
                        <img src={more} className={"more"} />

                    </div>




                </div>
                <div className={"heading"}>
                    The Latest and <div style={{display:"inline-block",color:"orange"}}>
                    Trendiest
                </div>
                </div>
            <Post/>
            <Post/>

            <div style={{height:"50px"}}>
                <button className={"suggestion"}>
                    READ MORE SUGGESTIONS
                </button>
            </div>


            </div>
        )

    }


}

export default Home