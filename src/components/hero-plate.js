import React, {Component} from "react";

const style = {
    padding: "1rem",
    textAlign: "center",
};

const paragraphStyle = {
    color: "#eecec2",
    fontFamily: "'Sailec Medium', sans-serif",
    textTransform: "uppercase"
};

const headerStyle = {
    fontFamily: "'Surveyor Medium', serif",
    color: "#1c2233"
};

export default class HeroPlate extends Component {
    render(){
        return (
            <div style={style}>
                <p style={paragraphStyle}>Case Study</p>
                <h2 style={headerStyle}>Faye’s Classic Eclectic Living Room</h2>
            </div>
        )
    }
}
