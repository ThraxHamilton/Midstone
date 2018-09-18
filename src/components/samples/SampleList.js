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
                <div className="newSampleButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/samples/new")
                        }
                        }>
                        Add New Sample
                </button>
                </div>

                <Container>
                <Row>
                    <div className= 'samples-container'>
                    {
                        this.props.samples.map(samples =>
                            <div key={samples.id} className="sample-card">
                                <div className='row'>
                              
                                    <CardGroup>
                                        <Card>
                                            <img src={samples.uploadedFileCloudinaryUrl} style={{ height: "auto", width: "100%" }} />
                                            <CardBody>
                                                <CardTitle><h4 className='song'>{samples.song}</h4></CardTitle>
                                                <CardSubtitle><h5 className='artist'>{samples.artist}</h5></CardSubtitle>
                                                <CardText>
                                                    </CardText>
                                                <Button><a href="#"
                                                    onClick={() => { this.props.history.push(`/samples/edit/${samples.id}`) }}
                                                    className="card-edit">Edit</a></Button>
                                                <Button><a href="#"
                                                    onClick={() => this.props.deleteSample(samples.id)}
                                                    className="card-delete">Delete</a></Button>
                                                <Button> <Link className="detail-button" to={`/samples/${samples.id}`}>Details</Link></Button>
                                            </CardBody>
                                        </Card>
                                    </CardGroup>
                                </div>
                                </div>






                           
                            

                        )
                    }
                    </div>
                    </Row>
                </Container>
            </React.Fragment >
        )
    }
}
