import React, { Component } from "react"

export default class SampleForm extends Component {
    // Set initial state
    state = {
        song: "",
        artist: "",
        album: "",
        year: ""
    }

    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating animal object, and
        invoking the function reference passed from parent component
     */
    constructNewSample = evt => {
        evt.preventDefault()
        if (this.state.sample === "" && this.state.artist === "") {
            window.alert("Please add a song")
        } else {
            const addNewSample = {
                song: this.state.song,
                artist: this.state.artist,
                album: this.state.album,
                year: this.state.year
            }

            // Create the employee and redirect user to employee list
            this.props.addSample(addNewSample).then(() => this.props.history.push("/samples"))
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="SampleForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">New Sample</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="song"
                            placeholder="Employee Name" />

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

                            <label htmlFor="ownerName">Year</label>
                        <input type="text" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="year"
                            placeholder="Album" />
                    </div>

                    <button type="submit" onClick={this.constructNewSample} className="btn btn-primary">Submit</button>
                </form>
            </React.Fragment>
        )
    }
}