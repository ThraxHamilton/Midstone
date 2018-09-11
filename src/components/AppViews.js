import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

import DataManager from '../data/DataManager'

import Login from './Login'

export default class AppViews extends Component{
    state = {
        username:[],
        email:[],
        password:[],
    }

    addUser = (user, link) => DataManager.post(user, link)
    .then(users => this.setState({
        users: users
    }))

    componentDidMount() {
        const _state = {}
        DataManager.getAll("users").then(users => _state.users = users)
        .then(() => { this.setState(_state) })
    }

    render(){
        return(
            <React.Fragment>
            <div className="viewArea">

                <Route exact path="/" render={(props) => {
                    return <Login {...props}
                        addUser={this.addUser} />
                }} />
                </div>
                </React.Fragment>
        )
    }
}