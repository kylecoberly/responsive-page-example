import React, {Component} from "react";
import "./style.css";

export default class Details extends Component {
    render(){
        return (
            <div className="details">
                <ul>
                    <li>
                        <h3>Client Name</h3>
                        <p>Faye J.</p>
                    </li>
                    <li>
                        <h3>Client Location</h3>
                        <p>Chicago, IL</p>
                    </li>
                    <li>
                        <h3>Designer Name</h3>
                        <p>Kylee T.</p>
                    </li>
                    <li>
                        <h3>Designer Location</h3>
                        <p>Denver, CO</p>
                    </li>
                    <li>
                        <h3>Timeline</h3>
                        <p>4 weeks</p>
                    </li>
                    <li>
                        <h3>Budget</h3>
                        <p>$6,000</p>
                    </li>
                </ul>
            </div>
        )
    }
}
