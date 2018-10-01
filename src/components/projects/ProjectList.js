import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'

import './Project.css'

export default class ProjectList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="newProjectButton">
                    <Button size='sm' block
                        className="add-btn btn-success"
                        onClick={() => {
                            this.props.history.push("/projects/new")
                        }
                        }>
                        Add A New Project
                </Button>
                </div>
                <section className="owners">
                    {
                        this.props.projects.map(projects =>
                            <div key={projects.id} className="card">
                                <div className="card-body">
                                    <div className="card-title">
                                        <div className='project-name'> <h5>{projects.project}</h5></div>
                                        <div> {projects.sample}</div>
                                        <div> {projects.artist}</div>
                                        <div>{projects.album}</div>
                                    </div>

                                    <div className='projectButtons'>
                                        <Link className="detail-link" to={`/projects/${projects.id}`}>Details</Link>

                                        <div>
                                            <a href="#"
                                                onClick={() => { this.props.history.push(`/projects/edit/${projects.id}`) }}
                                                className="project-edit">Edit</a>
                                        </div>

                                        <div>
                                            <a href="#"
                                                onClick={() => this.props.deleteProject(projects.id)}
                                                className="project-delete">Delete</a>
                                        </div>

                                    </div>


                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}
