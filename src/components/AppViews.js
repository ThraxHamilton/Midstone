import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

import Login from './Login'
import LoginManager from '../modules/LoginManager'

import SampleForm from './samples/SampleForm'
import SampleList from './samples/SampleList'
import SampleEdit from './samples/SampleEdit'
import SampleDetail from './samples/SampleDetail'
import SampleManager from '../modules/SampleManager'


export default class AppViews extends Component {
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        user: [],
        samples: [],
    }
    addUser = (user, link) => LoginManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))
    componentDidMount() {
        const _state = {}
        LoginManager.getAll("users").then(users => _state.users = users)
            .then(() => { this.setState(_state) })
            // .then(() => SampleManager.getAll("samples").then(samples => _state.samples = samples))

        SampleManager.getAll().then(allSamples => {
            this.setState({
                samples: allSamples
            })
        })
    }

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

    // EDIT FUNCTION(s)
    editSample = (sample, id) => SampleManager.edit(sample, id)
        .then(() => SampleManager.getAll())
        .then(samples => this.setState({
            samples: samples
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

                    {/* ADD NEW SAMPLE */}
                    <Route path="/samples/new" render={(props) => {
                        return <SampleForm {...props}
                            addSample={this.addSample}
                            sample={this.state.samples} />
                    }} />

                    {/* SAMPLE LIST */}
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



                    }} />
                </div>
            </React.Fragment>
        )

    }
}

