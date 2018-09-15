import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
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
                                    <CardDeck>
                                        <Card>
                                            <CardImg top width="100%" src="{this.state.image}" alt="Card image cap" />
                                            <CardBody>
                                                <CardTitle>{samples.song}</CardTitle>
                                                <CardSubtitle>{samples.artist}</CardSubtitle>
                                                <CardText>{samples.album}
                                                    {samples.year}</CardText>
                                                <Button><a href="#"
                                                    onClick={() => { this.props.history.push(`/samples/edit/${samples.id}`) }}
                                                    className="card-link">Edit</a></Button>
                                                <Button><a href="#"
                                                    onClick={() => this.props.deleteSample(samples.id)}
                                                    className="card-link">Delete</a></Button>
                                                    <Button> <Link className="nav-link" to={`/samples/${samples.id}`}>Details</Link></Button>
                                            </CardBody>
                                        </Card>
                                    </CardDeck>
                                </div>






                            </div>

                        )
                    }
                </section>
            </React.Fragment >
        )
    }
}

