import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

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
                <section className="owners">
                    {
                        this.props.samples.map(samples =>
                            <div key={samples.id} className="card">
                                <div className="card-body">
                                    <Card>
                                        <CardImg top width="80%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=218&h=180" alt="Card image cap" />
                                        <CardBody>
                                            <CardTitle>{samples.song}</CardTitle>
                                            <CardSubtitle>{samples.artist}</CardSubtitle>
                                            <CardText>

                                            </CardText>
                                            <Button> <Link className="nav-link" to={`/samples/${samples.id}`}>Details</Link></Button>

                                            <Button><a href="#"
                                                onClick={() => { this.props.history.push(`/samples/edit/${samples.id}`) }}
                                                className="card-link">Edit</a></Button>
                                                
                                            <Button><a href="#"
                                                onClick={() => this.props.deleteSample(samples.id)}
                                                className="card-link">Delete</a></Button>
                                        </CardBody>
                                    </Card>
                                </div>






                            </div>

                        )
                    }
                </section>
            </React.Fragment >
        )
    }
}

