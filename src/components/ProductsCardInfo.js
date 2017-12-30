import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import {Button, CardBody, CardSubtitle, CardText, CardTitle, Jumbotron} from "reactstrap";

export default class ProductsCardInfo extends Component {
    render() {
        const { info } = this.props;
        const { caption } = this.props;
        //const htmlString = ReactHtmlParser(info.toString());
        return (
            <blockquote style={{padding:"10px", display:"block", height:"100%"}}>
                <header style={{textAlign:"center", fontSize:"30px", paddingTop:"20px", color:"#3cb371"}}>{caption}</header>
                <p style={{textAlign:"center", fontSize:"15px", padding:"20px 30px"}}>{info}</p>
            </blockquote>
        );
    }
}
