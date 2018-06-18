import React, {Component} from "react";
import "./style.css";

export default class Details extends Component {
    render(){
        const details = this.props.details.map(detail => {
            return <li key={detail.key}>
                <h3>{detail.key}</h3>
                <p>{detail.value}</p>
            </li>;
        });
        return (
            <div className="details">
                <ul>{details}</ul>
            </div>
        )
    }
}
