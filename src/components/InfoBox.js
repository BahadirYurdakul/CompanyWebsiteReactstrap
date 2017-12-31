import React, { Component } from 'react';
import {Button, Container, Jumbotron} from "reactstrap";

export default class InfoBox extends Component {
    render() {
        const { info } = this.props;
        const htmlString = info.toString();
        return (
            <Container className="col-7">
                <Jumbotron>
                    <h1 className="display-5" style={{color:"#4169E1"}}>CVS Makine</h1>
                    <p className="lead" style={{color:"#4169E1", fontSize:"25px"}}>Lorem Ipsum...</p>
                    <hr className="my-2" />
                    <p>{info}</p>
                    <p className="lead col-4">
                            <button href="#/aboutUs" color="blue" className="btn-primary" type="button">
                                <span class="glyphicon">Daha fazla okumak için</span>
                            </button>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}