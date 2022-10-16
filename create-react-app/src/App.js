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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button onClick={this.toggleDisplay} className="btn btn-warning">Show less</button>
            </div>
        ) :(
            <div>
                <button onClick={this.toggleDisplay} className="btn btn-info">More</button>
            </div>
        );

        return (
            <div className="container">
                <div className="jumbotron">
                    <h1>Hello!</h1>
                    <p>My name is Lenin, I'm a software engineer.</p>
                    <p>I'm always looking forward to working on meaningful project</p>
                    {bio}
                    <hr/>
                </div>

                <Projects/>
            </div>
        )
    }
}

export default App;