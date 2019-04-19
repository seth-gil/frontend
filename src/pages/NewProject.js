import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import Col from "react-bootstrap/Col";
import ImageInput from "../components/ImageInput";

export default class NewProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: null,
            description: null,
            files: null,
            framerate: 15
        }
    }

    handleSubmit(event) {
        event.preventDefault();
            
        let formData = new FormData(),
            files = this.state.files;

        formData.append("name", this.state.name);
        formData.append("description", this.state.description);
        formData.append("framerate", this.state.framerate);

        for(var index = 0; index < files.length; index++) {
            formData.append("files[]", files.item(index), index + ".jpg");	
        }
        
        fetch("ttp://ec2-54-205-66-183.compute-1.amazonaws.com:5000/api/v1/project", {
            method: "POST",
            body: formData	
        }).then(id => {
            this.props.history.push(`/project/${id}`);
        }).catch(err => {
            console.log("Error", err);
        });
        
        // $.ajax({
        //     url: "http://ec2-54-205-66-183.compute-1.amazonaws.com:5000/api/v1/project",
        //     type: 'POST',
        //     contentType: 'application/json',
        //     data: JSON.stringify({
        //         name: this.state.name,
        //         description: this.state.description
        //     })
        // })
        // .done(id => {
        //     this.props.history.push(`/project/${id}`);
        //     console.log("ID:", id);
        // })
        // .fail(err => {
        //     console.error(err);
        // });
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit.bind(this)}>
                <Form.Group>
                    <Form.Label>
                        What do you want to call your new project?
                    </Form.Label>
                    <Form.Control onChange={event => this.setState({name: event.target.value})} type="text" placeholder="Enter project name"/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>
                        Describe your new project
                    </Form.Label>
                    <Form.Control onChange={event => this.setState({description: event.target.value})} as="textarea" rows="3" placeholder="Enter project description"/>
                </Form.Group>
                <Form.Row>
                    <Col sm>
                        <Form.Group>
                            <Form.Label>Choose images</Form.Label>
                            <ImageInput onChange={event => this.setState({files: event.target.files})} />
                        </Form.Group>
                    </Col>
                    <Col sm>
                        <Form.Group>
                            <Form.Label>Choose framerate (fps)</Form.Label>
                            <Form.Control as="select" onChange={event => {let sel = event.target; this.setState({framerate: sel.options[sel.selectedIndex].value})}}>
                                <option value="15">-- Please select --</option> {/* defaults to 15 */}
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Group>
                    <Button type="submit">
                        Create
                    </Button>
                </Form.Group>
            </Form>
        )
    }
}