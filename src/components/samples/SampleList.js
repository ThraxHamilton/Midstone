import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
                       Add New Owner
                </button>
                </div>
            <section className="owners">
            {
                this.props.samples.map(samples =>
                    <div key={samples.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            {samples.song}
                        
                        <Link className="nav-link" to={`/samples/${samples.id}`}>Details</Link>
                            <a href="#"
                                onClick={() => this.props.deleteSample(samples.id)}
                                className="card-link">Delete</a>
                        </h5>
                    </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}

