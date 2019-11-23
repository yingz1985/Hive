import React, { Component } from 'react';

import Card from "react-bootstrap/Card";
import hotpot from "../Images/8pot.jpg"
import ramen from "../Images/ramen.jpg"
import bbq from "../Images/bbq.jpg"

import '../Stylesheets/Recipe.css';


class FoodList extends React.Component {
    constructor(props){
        super(props);
        this.meals = this.props.meals;
        this.images=[hotpot,bbq,ramen];
    }
    render(){
        return(
            <div >
                {/*this*/}
                {this.meals.map((item,index) => {
                    return (

                        <Card className="item" style={{ width: '250px',display:"inline-block" }}>
                            <Card.Img variant={"top"} style={{ width: '100%',height:'150px'}} src={this.images[index]}/>
                            <Card.Body>
                                <a href={"/Recipe"}>
                                    <Card.Title className={"desc"}>{item.title}</Card.Title>
                                </a>

                            </Card.Body>
                        </Card>


                    )
                })}
            </div>


        )
    }
}

export {FoodList}