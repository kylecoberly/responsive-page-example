import React, {Component} from "react";

import Hero from "./components/hero/component.js";
import Blurb from "./components/blurb/component.js";
import Details from "./components/details/component.js";
import StyleList from "./components/style-list/component.js";

import {image, title, label, copy, styles, details} from "./data.js";

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
                <StyleList styles={styles} />
                <Details details={details} />
            </div>
        );
    }
};
