import React from "react";
import $ from "jquery";
import Upload from "./Upload";

export default class Project extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            loaded: false,
            data: null
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

    render() {
        return (
            <main>
                {
                    this.state.loaded ? (
                        <section>
                            <h1>{this.state.data.name}</h1>
                            <p>
                                {this.state.data.description}
                            </p>
                            <hr/>
                            <br/>
                            <Upload />
                            {/* <p>Preview:</p>
                            <video controls class="embed-responsive-item">
                                <source src={`http://ec2-54-205-66-183.compute-1.amazonaws.com:5000/${this.state.data.id}/preview.mp4`} type="video/mp4" />
                            </video> */}
                        </section>
                    ) : (
                        <p>Loading project data...</p>
                    )
                }
            </main>
        );
    }
}