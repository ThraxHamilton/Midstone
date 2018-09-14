import React, { Component } from "react"

export default class ProjectDetail extends Component {
   
    render() {
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId)) || {}
        return(
            <section className="project">
                <div key={project.id} className="card">
                    <div className="card-body">
                        <h4 className="card-title">
                            {project.project}
                            {project.sample}
                            {project.artist}
                            {project.album}
                        </h4>
                        {/* <h6 className="card-title">{project.artist}</h6> */}
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