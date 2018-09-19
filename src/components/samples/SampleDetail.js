import React, { Component } from "react"

export default class SampleDetail extends Component {
    render() {
        const sample = this.props.samples.find(a => a.id === parseInt(this.props.match.params.sampleId)) || {}

        return(
            <section className="owner">
                <div key={sample.id} className="card">
                    <div className="card-body">
                        <h4 className="detail-card">
                        <ul>
                            <li>{sample.song}</li>
                            <li>{sample.artist}</li>
                            <li>{sample.album}</li>
                            <li>{sample.year}</li>
                            </ul>
                        </h4>
                        <h6 className="card-title">{sample.artist}</h6>
                        <a href="#"
                            onClick={() => this.props.deleteSample(sample.id)
                                .then(() => this.props.history.push("/samples"))}
                            className="card-link">Delete</a>
                    </div>
                </div>
            </section>
        )

}}