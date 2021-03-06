import React, { Component } from "react"
import Dropzone from 'react-dropzone';
import request from 'superagent';
import {Button} from 'reactstrap'

// API/Cloud settings and URL
const CLOUDINARY_UPLOAD_PRESET = 'aawrrwib';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/cloud10/upload';

export default class SampleForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCloudinaryUrl: "",
            song: "",
            artist: "",
            album: "",
            year: "",
            image: "",
            link: ""
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


    // Set initial state




    // Update state whenever an input field is edited
    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    /*
        Local method for validation, creating an object, and
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
                year: this.state.year,
                image: this.state.image,
                link: this.state.link,
                uploadedFileCloudinaryUrl: this.state.uploadedFileCloudinaryUrl

            }

            // Create the sample and redirect user to sample list
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
                            placeholder="Title" />

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
                            placeholder="Year" />

                            <label htmlFor="ownerName">Link</label>
                        <input type="link" required="true"
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="link"
                            placeholder="Link" />

                        <Dropzone
                            multiple={false}
                            accept="image/*"
                            onDrop={this.onImageDrop.bind(this)}>
                            <p>Drop an image or click to select a file to upload.</p>
                        </Dropzone>
                    </div>




                    <Button type="submit" color='success' onClick={this.constructNewSample} className="btn btn-primary">Save To My Trax!</Button>
                </form>
            </React.Fragment>
        )
    }
}
