import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProjectList extends Component {
    render() {
        return(
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/projects/new")
                        }
                        }>
                        Add New Project
                </button>
                </div>
                <section className="owners">
                    {
                        this.props.projects.map(projects =>
                            <div key={projects.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                       <div> {projects.project}</div>
                                       <div> {projects.sample}</div>
                                       <div> {projects.artist}</div>
                                        <div>{projects.album}</div>
                                        


                                        <Link className="nav-link" to={`/projects/${projects.id}`}>Details</Link>

                                        <a href="#"
                                            onClick={() => { this.props.history.push(`/projects/edit/${projects.id}`) }}
                                            className="card-link">Edit</a>
                                            
                                        <a href="#"
                                            onClick={() => this.props.deleteProject(projects.id)}
                                            className="card-link">Delete</a>


                                    </h5>
                                </div>
                            </div>
                        )
                    }
                </section>
                </React.Fragment>
        )
    }       
}
