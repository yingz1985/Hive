import React from "react";
import hotpot from "../Images/hotpot2.jpg";
import bbq from "../Images/bbq.jpg";
import ramen from "../Images/ramen.jpg";
import line from "../Images/post-curve-line.png";
import '../Stylesheets/Post.css';
import more from "../Images/more.svg";

class Post extends React.Component {
    constructor(props){
        super(props);
        this.meals = this.props.meals;
        this.images=[hotpot,bbq,ramen];
    }
    render()

    {
        return(

        <div className={"row ml-150 mt-20"}>
            <div className="picture">
                <img className="post-thumbnail" src={hotpot} alt=""/>
            </div>

            <div className="post-content">
                <p className="post-date">Nov 20, 2019 / foody</p>

                    <p>Each hot pot has it’s own special soup base and ingredients!<br/>
                        The flavors include: The House Special Hot Soup, Taiwanese Spicy Hot Soup,<br/>
                        Cheese Milk Hot Soup, Garlic Beef Hot Soup, Herbal Lamb Hot Soup,<br/>
                        Sour Mustard Lamb Hot Soup, Tomato Pork Hot Soup, and Satay Beef Hot Soup.</p>


                <a href="#" className="read-more-btn">Continue Reading
                    <img src={more} className={"more"} /></a>
            </div>
            <img className="post-curve-line" src={line} alt=""/>
        </div>
        )



        }
}

export {Post}
