import React, {Component} from "react";
import Hero from "./components/hero/component.js";
import Blurb from "./components/blurb/component.js";

import image from "./assets/images/bedroom.jpg";
const title = "Faye’s Classic Eclectic Living Room";
const label = "Case Study";
const copy = "This is a small intro blurb that gives you just a bit of insight into Faye’s project. Should you decide to read more, than you scroll down to get the.";

export default class App extends Component {
    render(){
        return (
            <div>
                <Hero 
                    image={image}
                    title={title}
                    label={label}
                />
                <Blurb copy={copy} />
            </div>
        )
    }
}
