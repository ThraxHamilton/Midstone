import React, { Component } from "react"
import LoginManager from '../modules/LoginManager'

import './Login.css'

export default class Login extends Component {

    // Set initial state
    state = {
        username: "",
        email: "",
        password: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = (evt) => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    // Simplistic handler for login submit
    handleLogin = (e) => {
        e.preventDefault()

        /*
            For now, just store the email and password that
            the customer enters into session storage.
        */
        let email = this.state.email;
        let password = this.state.password;
        let username = this.state.username;
        LoginManager.getAll("users")
            .then(users => {
                // Filter through array of users
                let activeUser = users.find(u => u.inputEmail === email && u.inputPassword === password && u.inputUsername)
                if(activeUser){
                    // Save user to session storage
                    sessionStorage.setItem(
                        'activeUser',
                        JSON.stringify({
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                            id: activeUser.id
                        })
                    )
                    this.props.history.push("/samples")
                } else {
                    alert("No user found, please register!")
                }
            })
    }
// Save user to API
    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            inputUsername: this.state.username,
            inputEmail: this.state.email,
            inputPassword: this.state.password,
        }
// Push to API, then redirect to default app page
        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
            <div className='sign-in'>
                <h1>Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email address
                </label>

                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />

                <label htmlFor="inputPassword">
                    Username
                </label>

                <input onChange={this.handleFieldChange} type="username"
                    id="username"
                    placeholder="Username"
                    required="" autoFocus="" />


                <label htmlFor="inputPassword">
                    Password
                </label>

                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <button type="submit" onClick={this.constructNewUser}>
                    Register
                </button>

                <button type="submit" onClick={this.handleLogin}>
                    Sign In
                </button>
                </div>
            </form>
            
        )
    }
}