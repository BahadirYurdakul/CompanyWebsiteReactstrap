import React, {Component} from 'react';
import {Button, Container, Jumbotron} from "reactstrap";

export default class InfoBox extends Component {
    render() {
        const {info} = this.props;
        return (
            <Container className="col-sm-9">
                <Jumbotron>
                    <h1 className="display-5" style={{color: "#4169E1"}}>CPM Mühendislik</h1>
                    <p className="lead" style={{color: "#4169E1", fontSize: "25px"}}>Sustainable... Smart...
                        Solutions...</p>
                    <hr className="my-2"/>
                    <p style={{minHeight:"60px"}}>{info}</p>
                    <p className="lead col-4">
                        <a href="#/services">
                            <button color="blue" className="btn-primary" type="button">
                                <span>Hizmetlerimiz için...</span>
                            </button>
                        </a>
                    </p>
                </Jumbotron>
            </Container>
        );
    }
}