import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { ROOT } from "../API";
import { Link } from "react-router-dom";

export default function GridBox(props) {
    return (
        <Link style={{color: "inherit", textDecoration: "none"}} to={`/project/${props._id.$oid}`}>
            <Card>
                <Card.Img variant="top" src={`${ROOT}/${props._id.$oid}/0.jpg`} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    );
}