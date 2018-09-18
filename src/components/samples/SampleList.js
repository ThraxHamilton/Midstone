import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Card, Button, CardGroup, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Container, Row
} from 'reactstrap';

import './Samples.css'



export default class SampleList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/samples/new")
                        }
                        }>
                        Add New Sample
                </button>
                </div>

                <Container className="sample-container">
                <Row>
                    {
                        this.props.samples.map(samples =>
                            <div key={samples.id} className="sample-card">
                                <div class="card col-3">
                                <div class='row'>
                                
                                    <CardGroup>
                                        <Card>
                                            <img src={samples.uploadedFileCloudinaryUrl} style={{ height: "auto", width: "400px" }} />
                                            <CardBody>
                                                <CardTitle>{samples.song}</CardTitle>
                                                <CardSubtitle>{samples.artist}</CardSubtitle>
                                                <CardText>
                                                    </CardText>
                                                <Button><a href="#"
                                                    onClick={() => { this.props.history.push(`/samples/edit/${samples.id}`) }}
                                                    className="card-link">Edit</a></Button>
                                                <Button><a href="#"
                                                    onClick={() => this.props.deleteSample(samples.id)}
                                                    className="card-link">Delete</a></Button>
                                                <Button> <Link className="nav-link" to={`/samples/${samples.id}`}>Details</Link></Button>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                </div>
                                </div>






                            </div>

                        )
                    }
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
