import React from "react";
import $ from "jquery";
import Upload from "./Upload";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loaded: false,
            data: null,
            video: null //  check in the future
        }
    }

    componentDidMount() {
        $.getJSON(`http://ec2-54-205-66-183.compute-1.amazonaws.com:5000/api/v1/project/${this.state.id}`)
        .done((data) => {
            console.log(data);
            this.setState({data, loaded: true});
        })
        .fail((err) => {
            console.error(err);
        });
    }

    handleVideo = () => {
        let id = this.state.id;
        this.setState({video: `http://ec2-54-205-66-183.compute-1.amazonaws.com:5000/${id}/preview.mp4`})
    }

    render() {
        return (
            <main>
                {
                    this.state.loaded ? (
                        <section>
                            <section>
                                <h1>{this.state.data.name}</h1>
                                <p>
                                    {this.state.data.description}
                                </p>
                                <hr/>
                                <br/>
                                <Upload id={this.state.id} success={this.handleVideo.bind(this)} />
                            </section>
                            <hr/>
                            <br/>
                            <section style={{marginTop: "10px"}}>
                                {
                                    this.state.video ? (
                                        <section>
                                            <p>Preview:</p>
                                            <video width="400px" height="300px" controls className="embed-responsive-item">
                                                <source src={this.state.video} type="video/mp4" />
                                            </video>
                                        </section>
                                    ) : (
                                        <p><i>No video content yet.</i></p>
                                    )
                                }
                            </section>
                        </section>
                    ) : (
                        <p>Loading project data...</p>
                    )
                }
            </main>
        );
    }
}