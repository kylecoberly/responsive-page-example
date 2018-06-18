import React, {Component} from "react";
import "./style.css";

export default class StyleList extends Component {
    render(){
        const styles = this.props.styles.map(style => {
            return <li key={style}>
                <span className="icon-wrapper"><i className="material-icons">check</i></span>
                <p>{style}</p>
            </li>;
        });
        return (
            <div className="style-list">
                <h3>Styles Used</h3>
                <ul>{styles}</ul>
            </div>
        )
    }
}
