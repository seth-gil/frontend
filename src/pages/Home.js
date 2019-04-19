import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NewProject from "./NewProject";

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            modalShow: false
        }
    }

    handleShow() {
        this.setState({modalShow: true});
    }

    handleClose() {
        this.setState({modalShow: false});
    }

    render() {
        return (
            <main>
                <section style={{
                    textAlign: "center",
                    position: "absolute",
                    left: "50%", top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "100%"
                    }}>
                    <h1>Welcome to Animatrix!</h1>
                    <h4>The free online stop-motion animation software.</h4><br/>
                    <Button variant="secondary" onClick={this.handleShow.bind(this)}>Get started</Button>
                </section>

                <Modal show={this.state.modalShow} onHide={this.handleClose.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Let's get started!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <NewProject />
                    </Modal.Body>
                </Modal>
            </main>
        )
    } 
}