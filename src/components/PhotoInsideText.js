import React, { Component } from 'react';
import {
    CardGroup, Container, Row
} from "reactstrap";
import ProductsCardInfo from "./ProductsCardInfo";

export default class PhotoInsideText extends Component {

    render() {
        const { products } = this.props;
        const productCards = products.map((item, index) => {
            let horizontalLine;
            if(index + 1 !== products.length)
                horizontalLine = <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>;
            return (
                <Container fluid={true} className="col-11 row">
                    <div>
                        <img style={{border:"3px solid black", marginRight:"30px"}} align="left" width="180px"
                             src={item.src} alt="Hizmet fotoğrafı" height="180px"/>
                        <h2 align="center" style={{marginBottom:"20px"}}>{item.name}</h2>
                        <text id="textFont">{item.info}</text>
                    </div>
                    {horizontalLine}
                </Container>
            );
        });

        return (
            <div style={{paddingBottom:"50px", paddingTop:"30px"}}>
                <Container className="col-10">
                    {productCards}
                </Container>
            </div>
        );
    }
}