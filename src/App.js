import React, {Component} from "react";
import Hero from "./components/hero/component.js";

import image from "./assets/images/bedroom.jpg";
const title = "Faye’s Classic Eclectic Living Room";
const label = "Case Study";

export default class App extends Component {
    render(){
        return (
            <div>
                <Hero 
                    image={image}
                    title={title}
                    label={label}
                />
            </div>
        )
    }
}
