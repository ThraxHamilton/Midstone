import React, { Component } from "react"
import { Route, Redirect } from 'react-router-dom'

import Login from './Login'
import LoginManager from '../modules/LoginManager'

export default class AppViews extends Component{
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null

    state = {
        user:""
    }
    addUser = (user, link) => LoginManager.post(user, link)
        .then(users => this.setState({
            users: users
        }))
        componentDidMount() {
            const _state = {}
            LoginManager.getAll("users").then(users => _state.users = users)
            .then(() => { this.setState(_state) })
        }
            render() {
                return (
                    <React.Fragment>
                        <div className="viewArea">
        
                            <Route path="/" render={(props) => {
                                return <Login {...props}
                                    addUser={this.addUser} />
                            }} />
                            </div>
                            </React.Fragment>
                )
        
}
}

