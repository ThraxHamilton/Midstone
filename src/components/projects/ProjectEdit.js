import React, { Component } from "react"

export default class ProjectEdit extends Component{
    state = {
        project: [],
        sample: [],
        artist: [],
        album: [],
        project:{},
       
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // Run thru array of samples                                  Match sample to URL
        const project = this.props.projects.find(a => a.id === parseInt(this.props.match.params.projectId, 0))

        this.project.value = project.project;
        this.sample.value = project.sample;
        this.artist.value = project.artist;
        this.album.value = project.album;
      

        this.setState({
            project: (project)
        })
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
                            ref={input => this.project = input}
                            placeholder="Edit Project" />
                            
                        <label htmlFor="ownerName">New Sample</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="sample"
                            ref={input => this.sample = input}
                            placeholder="Edit Sample" />
    
                            <label htmlFor="ownerName">Artist</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="artist"
                            ref={input => this.artist = input}
                            placeholder="Artist" />
    
                            <label htmlFor="ownerName">Album</label>
                        <input type="text" required={true}
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="album"
                            ref={input => this.album = input}
                            placeholder="Album" />
    
                        
                    </div>
                        <button type="submit" onClick={this.editProject} className="btn btn-primary">Done!</button>
                    </form>
                </React.Fragment>
            )
        }

}