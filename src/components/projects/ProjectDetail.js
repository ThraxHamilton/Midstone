import React, { Component } from "react"

export default class ProjectDetail extends Component {
   
    render() {
        // Finds project through an array; then matches with specific URL
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}


        return(
            <section className="project">
                <div key={project.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                           <div className='project-detail'><h5>{project.project}</h5></div> 
                           <h6>
                            <div>{project.sample}</div>
                            <div>{project.artist}</div>
                            <div>{project.album}</div>
                            </h6>
                        </h4>
                        <a href="#"
                            onClick={() => this.props.deleteProject(project.id)
                                .then(() => this.props.history.push("/projects"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )
    }
}