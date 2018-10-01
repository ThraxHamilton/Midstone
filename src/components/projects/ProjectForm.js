import React, { Component } from "react"
import {Button} from 'reactstrap'

export default class ProjectForm extends Component {
    // Set initial empty states
    state = {
        project: "",
        sample: "",
        artist: "",
        album: "",
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }
// Construct a new project in API using empty states from above
    constructNewProject = evt => {
        evt.preventDefault()
        if (this.state.project === "" && this.state.sample === "") {
            window.alert("Please add a song")
        } else {
            // Update states
            const addNewProject = {
                project: this.state.project,
                sample: this.state.sample,
                artist: this.state.artist,
                album: this.state.album,
            }

            // vvv Create the project vvv       and            vvv redirect user to project list vvv
            this.props.addProject(addNewProject).then(() => this.props.history.push("/projects"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="SampleForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">New Project</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="project"
                            placeholder="Name" />

                        <label htmlFor="ownerName">Sample</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sample"
                            placeholder="Sample" />

                        <label htmlFor="ownerName">Artist</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="artist"
                            placeholder="Artist" />

                        <label htmlFor="ownerName">Album</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="album"
                            placeholder="Album" />


                    </div>

                    <Button type="submit" color='success' onClick={this.constructNewProject} className="btn btn-primary">Add To My List</Button>
                </form>
            </React.Fragment>
        )
    }

}