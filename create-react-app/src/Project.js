import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {

    render() {

        console.log('this.props', this.props);
        const {title, image, description, link} = this.props.project;

        return (
            <div style={{display: 'inline-block', width: 300, margin: 10}}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p><a href={link}>{link}</a></p>
                <img src={image} style={{height: 80}} alt={title} />
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Project</h2>
                <div>
                    {
                        PROJECTS.map(PROJECT => {
                            return (
                                // <div key={PROJECT.id}>{PROJECT.title}</div>
                                <Project key={PROJECT.id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div> 
        )
    }
}

export default Projects;