import icon from "../Images/logo.svg";
import typography from "../Images/hive.svg";
import React from "react";

import {Button} from "react-bootstrap";
import '../Stylesheets/Banner.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Redirect from "react-router-dom/es/Redirect";
import {Link} from "react-router-dom";

class Banner extends React.Component {

    state = {
        redirectAbout: false,
        redirectDirectory:false,
        redirectHome: false,
        redirectRecipe: false
    }
    setRedirectAbout = () => {
        this.setState({
            redirectAbout: true
        })
    }
    renderRedirectAbout = () => {
        if (this.state.redirectAbout) {
            return <Redirect to='/AboutMe' />
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

    setRedirectDirectory = () => {
        this.setState({
            redirectDirectory: true
        })
    }
    renderRedirectDirectory = () => {

        if (this.state.redirectDirectory) {

            return <Redirect to='/Directory' />
        }
    }


    render() {
        // if (this.state.redirectDirectory) {
        //     return <Redirect exact to="/Directory" />;
        // }
        // if(this.state.redirectAbout)
        // {
        //     return <Redirect exact to="/AboutMe"/>;
        // }
        // if(this.state.redirectHome)
        // {
        //     return <Redirect exact to="/Home"/>;
        // }
        // this.renderRedirectHome();
        // this.renderRedirectAbout();
        // this.renderRedirectDirectory();
        //{/*<div className="banner">*/}
        return (
            <Navbar style={{ marginRight: 40,  marginBottom: 10}}
                    className={"justify-content-between banner"}>

                <Nav style={{ marginLeft:80}} >

                    <div className={"iconContainer"}>

                        <img className={"Icon"} src={icon} alt="icon" />
                    </div>
                    <Link to="/Home">
                            <Button onClick={this.setRedirectHome} className={"Button"}>

                                Home
                            </Button>
                    </Link>
                    <Link to="/Directory">
                            <Button onClick={this.setRedirectDirectory} className={"Button"}>
                                Foodies
                            </Button>
                    </Link>
                    <Link to="/AboutMe">
                            <Button onClick={this.setRedirectAbout} className={"Button"}>
                                About Me
                            </Button>
                    </Link>


                </Nav>
                <Nav>
                    <div className={"typeContainer"}>
                        <img src={typography} className={"ty"} />
                    </div>
                </Nav>
            </Navbar>






        );
    }
}
export {Banner};