import React, {Component} from "react";
import "./style.css";

export default class HeroPlate extends Component {
    render(){
        return (
            <div className="hero-plate">
                <p>{this.props.label}</p>
                <h2>{this.props.title}</h2>
            </div>
        );
    }
};
