import React, {Component} from "react";
import HeroPlate from "../hero-plate/component.js";
import "./style.css";

export default class Hero extends Component {
    render(){
        return (
            <div className="hero">
                <HeroPlate label={this.props.label} title={this.props.title} />
                <img src={this.props.image} alt="bedroom" />
            </div>
        );
    };
};
