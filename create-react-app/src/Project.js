import React, { Component } from "react";
import PROJECTS from "./data/projects";

class Project extends Component {

    render() {

        console.log('this.props', this.props);
        const {title, image, description, link} = this.props.project;

        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail">
                    <img src={image} alt={title} />
                    <div className="caption">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <p><a href={link}>{link}</a></p>
                    </div>
                </div>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlighted Project</h2>
                <div className="row">
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
