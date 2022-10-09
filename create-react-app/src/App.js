import React, { Component } from "react";
import Projects from "./Project";

// same name as file
class App extends Component {
    // constructor() {
    //     // always call super
    //     super();

    //     this.state = {
    //         displayBio: false
    //     };

    //     // console.log('constructor', this);
    //     this.toggleDisplay = this.toggleDisplay.bind(this);
    // }

    // toggleDisplay() {
    //     // do not directly update property object
    //     // this.state.displayBio = true;

    //     this.setState({
    //         displayBio: !this.state.displayBio
    //     });

    //     // console.log('readmore', this);
    // }

    state = ({displayBio : false})

    toggleDisplay = () => {
        this.setState({
            displayBio: !this.state.displayBio
        })
    }

    // structure of element
    render() {
        let bio = this.state.displayBio ? (
            <div>
                <p>hello again</p>
                <p>hello again</p>
                <p>hello again</p>
                <button onClick={this.toggleDisplay}>Show less</button>
            </div>
        ) :(
            <div>
                <button onClick={this.toggleDisplay}>More</button>
            </div>
        );

        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Lenin, I'm a software engineer.</p>
                <p>I'm always looking forward to working on meaningful project</p>
                {bio}
                <hr/>

                <Projects/>
            </div>
        )
    }
}

export default App;