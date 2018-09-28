import React, { Component } from "react"
import Dropzone from 'react-dropzone';
import request from 'superagent';


const CLOUDINARY_UPLOAD_PRESET = 'aawrrwib';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/cloud10/upload';

export default class SampleEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: "",
            song: "",
            artist: "",
            album: "",
            year: "",
            image: "",
            sample:{}
        };
    }
    // FUNCTIONS FOR IMAGE DROP
    onImageDrop(files) {
        this.setState({
            uploadedFile: files[0]
        });
        console.log(files)

        this.handleImageUpload(files[0]);
        console.log(files)
    }
    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset' , CLOUDINARY_UPLOAD_PRESET)
                    .field('file', file);
        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== '') {
                this.setState({
                    uploadedFileCloudinaryUrl: response.body.secure_url
                });
            }
        });
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    componentDidMount() {
        // Run thru array of samples                                  Match sample to URL
        const sample = this.props.samples.find(a => a.id === parseInt(this.props.match.params.sampleId, 0))
        console.log(parseInt(this.props.match.params.sampleId, 0))
        console.log(this.props)

        console.log(sample)

        // Setting values to be used below in ref
        this.song.value = sample.song;
        this.artist.value = sample.artist;
        this.album.value = sample.album;
        this.year.value = sample.year;
        this.setState({uploadedFileCloudinaryUrl: sample.uploadedFileCloudinaryUrl})


        // Set state
        this.setState({
            sample: (sample)
        })
    }

    editSample = evt => {
        evt.preventDefault()
            const sample = {
                song: this.state.song,
                artist: this.state.artist,
                album: this.state.album,
                year: this.state.year,
                uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl

            }
            const sampleEditId = parseInt(this.props.match.params.sampleId, 0)
            // Create the animal and redirect user to animal list
            this.props.editSample(sample, sampleEditId).then(() => this.props.history.push("/samples"))
        }

    render(){
        return(
            <React.Fragment>
            <form className="SampleForm">
                <div className="form-group">
                    <label htmlFor="song">Edit Sample</label>
                    <input type="text" required={true}
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="song"
                        // Ref to values above in componentDidMount()
                        ref={input => this.song = input}
                        placeholder='Song' />

                        <label htmlFor="ownerName">Artist</label>
                    <input type="text" required={true}
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="artist"
                        ref={input => this.artist = input}
                        defaultValue={this.state.artist} />

                        <label htmlFor="ownerName">Album</label>
                    <input type="text" required={true}
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="album"
                        ref={input => this.album = input}
                        placeholder="Album" />

                        <label htmlFor="ownerName">Year</label>
                    <input type="text" required={true}
                        className="form-control"
                        onChange={this.handleFieldChange}
                        id="year"
                        ref={input => this.year = input}
                        placeholder="Year" />

                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                </div>
                    <button type="submit" onClick={this.editSample} className="btn btn-primary">Edit</button>
                </form>
            </React.Fragment>
        )
    }
}