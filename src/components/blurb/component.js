import React, {Component} from "react";
import "./style.css";
import StyleList from "../style-list/component.js";

export default class Blurb extends Component {
    render(){
        return (
            <div className="blurb">
                <p>{this.props.copy}</p>
                <StyleList styles={this.props.styles} />
            </div>
        )
    }
}
