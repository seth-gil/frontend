import React from "react";
import GridBox from "../components/GridBox";
import CardColumns from "react-bootstrap/CardColumns";
import { ROOT } from "../API";

export default class Projects extends React.Component {
    state = {
        data: null
    }

    componentDidMount() {
        var _this = this;

        fetch(ROOT + "/api/v1/projects", {
            method: "GET"
        }).then(res => {
            res.json().then(data => {
                console.log(data);
                _this.setState({data});
            });
        }).catch(err => {
            console.error(err);
        })
    }

    render() {
        return (
            <main>
                <CardColumns>
                    {
                        this.state.data ? (
                            this.state.data.reverse().map((project, index) => {
                                return React.createElement(
                                    GridBox, {...project, key: index}, null
                                )
                            })
                        ) : (
                            <p>Loading projects...</p>
                        )
                    }
                </CardColumns>
            </main>
        )
    } 
}  