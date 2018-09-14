import React, { Component } from "react"

export default class ProjectEdit extends Component{
    state = {
        project: [],
        sample: [],
        artist: [],
        album: [],
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    editProject = evt => {
        evt.preventDefault()

            const project = {
                project: this.state.project,
                sample: this.state.sample,
                artist: this.state.artist,
                album: this.state.album,
            }
            const projectEditId = parseInt(this.props.match.params.projectId, 0)
            // Create the animal and redirect user to animal list
            this.props.editProject(project, projectEditId).then(() => this.props.history.push("/projects"))
        }

        render(){
            return(
                <React.Fragment>
                <form className="SampleForm">
                    <div className="form-group">

                        <label htmlFor="ownerName">New Project</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="project"
                            placeholder="New Project" />
                            
                        <label htmlFor="ownerName">New Sample</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sample"
                            placeholder="Sample Used" />
    
                            <label htmlFor="ownerName">Artist</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="artist"
                            placeholder="Artist" />
    
                            <label htmlFor="ownerName">Album</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="album"
                            placeholder="Album" />
    
                        
                    </div>
                        <button type="submit" onClick={this.editProject} className="btn btn-primary">Edit</button>
                    </form>
                </React.Fragment>
            )
        }

}