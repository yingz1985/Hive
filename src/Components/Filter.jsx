import React, { Component } from 'react';

import '../Stylesheets/Recipe.css';
import Form from "react-bootstrap/Form";


class Filter extends React.Component {
    constructor(props){
        super(props);

    }
    render(){
        return(
            <div style={{float:"right",marginRight:200}}>


            <Form className={"filter"}>
                <div >
                    Healthy
                    <Form.Check label="sugar free" type='radio' />
                    <Form.Check label="gluten free" type='radio'  />
                    <Form.Check label="superfoods " type='radio'
                    />
                </div>
            </Form>
                <Form className={"filter"}>
                    <div >
                        Meal
                        <Form.Check label="vegetarian" type='radio' />
                        <Form.Check label="sandwiches" type='radio'  />
                        <Form.Check label="meal prep" type='radio'
                        />
                    </div>
                </Form>
                <Form className={"filter"}>
                    <div >
                        Dessert
                        <Form.Check label="sugar free" type='radio' />
                        <Form.Check label="gluten free" type='radio'  />
                        <Form.Check label="chocolate" type='radio'
                        />
                    </div>
                </Form>
            </div>



        )
    }
}

export {Filter}


