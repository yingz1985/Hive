import React, { Component } from 'react';

import Card from "react-bootstrap/Card";
import hotpot from "../Images/8pot.jpg"
import ramen from "../Images/ramen.jpg"
import bbq from "../Images/bbq.jpg"
import '../Stylesheets/Recipe.css';


class RecipeItem extends React.Component {
    constructor(props){
        super(props);
        this.meals = this.props.meals;
        this.images=[hotpot,bbq,ramen];
    }
    render(){
        return(
            <div style={{}}>
                {/*this*/}
                {this.meals.map((item,index) => {
                    return (

                        <Card className="card" style={{ width: '300px',display:"inline-block" }}>
                            <Card.Img variant={"top"} className="image"   src={this.images[index]}/>
                            <Card.Body>
                                <a href={"/Recipe"}>
                            <Card.Title className={"title"}>{item.title}</Card.Title>
                                </a>

                            </Card.Body>
                        </Card>


                    )
                })}
            </div>


        )
    }
}

export {RecipeItem}