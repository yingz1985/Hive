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
import {FoodList} from "./FoodList";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import {Filter} from "./Filter";


class Directory extends Component {
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
                <Form inline style={{float:"right",marginRight:40}}>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form>
                <Pagination style={{float:"right",marginRight:120}}>
                    <Pagination.First disabled/>
                    <Pagination.Prev disabled/>
                    <Pagination.Item active>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>

                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>

                <div style={{fontFamily:"Mansalva",fontSize:20,marginLeft:100,marginBottom:20}}>
                    Recipes/ Food Guides
                </div>






                <div style={{marginTop:"35px",}}>

                    <div className="column1" >
                        <div style={{marginLeft:"100px"}}>
                            <FoodList meals={meals}/>

                        </div>
                        <div style={{marginLeft:"100px"}}>
                            <FoodList meals={meals}/>
                        </div>
                        <div style={{marginLeft:"100px"}}>
                            <FoodList  meals={meals}/>
                        </div>
                    </div>
                    </div>
                    <div className="column2">
                        <Filter />
                    </div>


            </div>

        )

    }


}

export default Directory