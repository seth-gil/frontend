import React from "react";
import $ from "jquery";
import Container from "react-bootstrap/Container";
import { ROOT } from "../API";

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
        $.getJSON(`${ROOT}/api/v1/project/${this.state.id}`)
        .done((data) => {
            console.log(data);
            data.id = data._id.$oid;

            this.setState({data, loaded: true});
        })
        .fail((err) => {
            console.error(err);
        });
    }

    render() {
        console.log(this.state.data);
        return (
            <Container style={{maxWidth: "600px"}}>
                
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
                            </section>
                            <section style={{marginTop: "10px"}}>
                                <p>Preview:</p>
                                <video style={{width: "100%"}} controls className="embed-responsive-item">
                                    <source src={`${ROOT}/${this.state.id}/preview.mp4`} type="video/mp4" />
                                </video>
                            </section>
                        </section>
                    ) : (
                        <p>Loading project data...</p>
                    )
                }
            </Container>
        );
    }
}