import React, { Component } from "react"
import LoginManager from '../modules/LoginManager'

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
            the customer enters into local storage.
        */
        let email = this.state.email;
        let password = this.state.password;
        let username = this.state.username;
        LoginManager.getAll("users")
            .then(users => {
                let loginUser = users.find(u => u.inputEmail === email && u.inputPassword === password && u.inputUsername)
                if(loginUser){
                    sessionStorage.setItem(
                        "credentials",
                        JSON.stringify({
                            username: this.state.username,
                            email: this.state.email,
                            password: this.state.password,
                            id: loginUser.id
                        })
                    )
                    this.props.history.push("/users")
                } else {
                    alert("No user found, please register!")
                }
            })
    }

    constructNewUser = evt => {
        evt.preventDefault()
        const user = {
            inputUsername: this.state.username,
            inputEmail: this.state.email,
            inputPassword: this.state.password,
        }

        this.props.addUser(user, "users").then(() => this.props.history.push("/"))
    }


    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
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
            </form>
        )
    }
}