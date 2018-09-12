import React, { Component } from "react"

export default class SampleEdit extends Component {
    state = {
        song: [],
        artist: [],
        album: [],
        year: []
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    editSample = evt => {
        evt.preventDefault()

            const sample = {
                song: this.state.sample,
                artist: this.state.artist,
            }
            const sampleEditId = parseInt(this.props.match.params.sampleId, 0)
            // Create the animal and redirect user to animal list
            this.props.editSample(sample, sampleEditId, 'samples').then(() => this.props.history.push("/samples"))
        }

    render(){
        return(
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
                    <button type="submit" onClick={this.editSample} className="btn btn-primary">Edit</button>
                </form>
            </React.Fragment>
        )
    }
}