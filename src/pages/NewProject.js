import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import $ from "jquery";
import Col from "react-bootstrap/Col";
import ImageInput from "../components/ImageInput";
import { Redirect } from 'react-router';
import { ROOT } from "../API";

export default class NewProject extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "default",
            description: "default",
            files: "default",
            framerate: "default",
            frames: [],
            redirect: null,
            pendingSubmit: false
        }
    }

    setFrames = (frames) => {
        this.setState({frames: frames});
    }

    shrinkImages(files) {
        let readers = Array(files.length), frames = Array(files.length), images = Array(files.length), canvas, context, _this = this;
    
        canvas = document.createElement('canvas');
        context = canvas.getContext('2d');
        canvas.width = 600;
        canvas.height = 450;
        
        for (var i = 0; i < files.length; i++) {        
            (function(file, index) {
                readers[index] = new FileReader(); // init a file reader
    
                readers[index].onloadend = function() {
                    // shrink image
                    images[index] = document.createElement('img');
                    images[index].src = this.result;
                    
                    $(images[index]).on("load", function() {
                        context.clearRect(0, 0, canvas.width, canvas.height);
                        context.drawImage(this, 0, 0, 600, 450);
                        frames[index] = {time: file.lastModified, frame: canvas.toDataURL('image/jpeg', 0.50)};
                        _this.setFrames(frames);
                    });
                };
    
                readers[index].readAsDataURL(file); 
            })(files[i], i);
        }
    }

    handleFileSelect(event) {
        this.setState({files: event.target.files, frames: Array(event.target.files.length)})
        this.shrinkImages(event.target.files);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({pendingSubmit: true});
    }

    componentDidUpdate() {
        if((this.state.files.length == this.state.frames.length) && this.state.pendingSubmit) {
            let _this = this,
                frames = this.state.frames;

            // frames = frames.map(frame => {
            //     return frame.substr(23);
            // })

            frames = frames.sort((a, b) => {
                // Sort
                if (a.time > b.time) return 1;
                if (b.time > a.time) return -1;
            }).map(frame => {
                // Remove time key
                return frame.frame;
            });

            console.log(frames);

            
            
            fetch(ROOT + "/api/v1/project", {
                method: "POST",
                //body: formData
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: this.state.name,
                    description: this.state.description,
                    framerate: this.state.framerate,
                    frames: frames
                })	
            }).then(res => {
                res.text().then(function (id) {
                    console.log(id);
                    _this.setState({redirect: `/project/${id}`})
                });
            }).catch(err => {
                console.log("Error", err);
            });
        }
     }

    render() {
        //console.log(this.state.frames);
        return (
            <section>
                {/* {
                    this.state.frames.map((frame, index) => {
                        return (
                            <section key={index+200}>
                                <p key={index+100}>
                                    {index}
                                </p>
                                <img key={index} src={frame} />
                            </section>
                        );
                    })
                } */}
                {
                    !this.state.redirect ? (
                        !this.state.pendingSubmit ? (
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
                                            <ImageInput onChange={this.handleFileSelect.bind(this)} />
                                        </Form.Group>
                                    </Col>
                                    <Col sm>
                                        <Form.Group>
                                            <Form.Label>Choose framerate (fps)</Form.Label>
                                            <Form.Control as="select" onChange={event => {let sel = event.target; this.setState({framerate: sel.options[sel.selectedIndex].value})}}>
                                                <option value="15">-- Please select --</option> {/* defaults to 15 */}
                                                <option value="1">1</option>
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
                        ) : (
                            <p>Submitting data...</p>
                        )
                    ) :
                    (
                        <Redirect to={this.state.redirect} />
                    )
                }
            </section>
            
        )
    }
}