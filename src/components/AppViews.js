import React, { Component } from "react"
import { Route} from 'react-router-dom'

import Login from './Login'
import LoginManager from '../modules/LoginManager'

import SampleForm from './samples/SampleForm'
import SampleList from './samples/SampleList'
import SampleEdit from './samples/SampleEdit'
import SampleDetail from './samples/SampleDetail'
import SampleManager from '../modules/SampleManager'

import ProjectDetail from './projects/ProjectDetail'
import ProjectEdit from './projects/ProjectEdit'
import ProjectForm from './projects/ProjectForm'
import ProjectList from './projects/ProjectList'
import ProjectManager from '../modules/ProjectManager'


export default class AppViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        user: [],
        samples: [],
        projects: [],
    }
    addUser = (user, link) => LoginManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))

    componentDidMount() {
        const _state = {}
        LoginManager.getAll("users").then(users => _state.users = users)
        // .then(() => SampleManager.getAll("samples").then(samples => _state.samples = samples))
        
        SampleManager.getAll().then(allSamples => {
            this.setState({
                samples: allSamples
            })
        })
        ProjectManager.getAll().then(allProjects => {
            this.setState({
                projects: allProjects
            })
        })
        .then(() => { this.setState(_state) })
    }
    // SAMPLES
    addSample = sample => SampleManager.post(sample)
        .then(() => SampleManager.getAll())
        .then(samples => this.setState({
            samples: samples
        }))

    deleteSample = id => {
        return fetch(`http://localhost:5002/samples/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/samples`))
            .then(e => e.json())
            .then(samples => this.setState({
                samples: samples
            }))
    }
    // PROJECTS
    addProject = project => ProjectManager.post(project)
        .then(() => ProjectManager.getAll())
        .then(project => this.setState({
            project: project
        }))

    deleteProject = id => {
        return fetch(`http://localhost:5002/projects/${id}`, {
            method: "DELETE"
        })
            .then(e => e.json())
            .then(() => fetch(`http://localhost:5002/projects`))
            .then(e => e.json())
            .then(projects => this.setState({
                projects: projects
            }))
    }



    // EDIT SAMPLE FUNCTION(s)
    editSample = (sample, id) => SampleManager.edit(sample, id)
        .then(() => SampleManager.getAll())
        .then(samples => this.setState({
            samples: samples
        }))

     // EDIT PROJECT FUNCTION(s)
     editProject= (project, id) => ProjectManager.edit(project, id)
     .then(() => ProjectManager.getAll())
     .then(projects => this.setState({
         projects: projects
     }))

    render() {
        return (
            <React.Fragment>
                <div className="viewArea">
                {/* LOGIN */}
                    <Route path="/" render={(props) => {
                        return <Login {...props}
                            addUser={this.addUser} />
                    }} />

                 {/* SAMPLES */} {/* SAMPLES */} {/* SAMPLES */}{/* SAMPLES */}{/* SAMPLES */}
                    {/* Add New Sample*/}
                    <Route path="/samples/new" render={(props) => {
                        return <SampleForm {...props}
                            addSample={this.addSample}
                            sample={this.state.samples} />
                    }} />

                    {/* Sample List */}
                <Route exact path="/samples" render={(props) => {
                    return <SampleList {...props}
                        deleteSample={this.deleteSample}
                        samples={this.state.samples} />
                }} />

                {/* Exact path for details */}
                <Route exact path="/samples/:sampleId(\d+)" render={(props) => {
                    return <SampleDetail {...props} deleteSample={this.deleteSample} samples={this.state.samples} />
                }} />
                
                
                <Route exact path="/samples/edit/:sampleId(\d+)" render={(props) => {
                    return <SampleEdit {...props} editSample={this.editSample} samples={this.state.samples} />
                }} />

                {/* PROJECTS */}{/* PROJECTS */}{/* PROJECTS */}{/* PROJECTS */}{/* PROJECTS */}
                {/* New Project */}
                <Route path="/projects/new" render={(props) => {
                        return <ProjectForm {...props}
                            addProject={this.addProject}
                            project={this.state.projects} />
                    }} />
                    {/* Project List */}
                    <Route exact path="/projects" render={(props) => {
                    return <ProjectList {...props}
                        deleteProject={this.deleteProject}
                        projects={this.state.projects} />
                }} />
                {/* Details */}
                <Route exact path="/projects/:projectId(\d+)" render={(props) => {
                    return <ProjectDetail {...props} deleteProject={this.deleteProject} projects={this.state.projects} />
                }} />

                {/* Edit */}
                <Route exact path="/projects/edit/:projectId(\d+)" render={(props) => {
                    return <ProjectEdit {...props} editProject={this.editProject} projects={this.state.projects} />
                }} />

                






                    }} 
                </div>
            </React.Fragment>
        )

    }
}

