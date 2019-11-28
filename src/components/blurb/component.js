import React, {Component} from "react";
import "./style.css";

export default class Blurb extends Component {
    render(){
        return (
            <div className="blurb">
                <p>{this.props.copy}</p>
            </div>
        );
    }
};
