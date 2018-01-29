import React, { Component } from 'react';
import {
    CardGroup, Container, Row
} from "reactstrap";
import ProductsCardInfo from "./ProductsCardInfo";

export default class ServiceList extends Component {

    render() {
        const { products } = this.props;
        const productCards = products.map((item, index) => {
            let horizontalLine;
            if(index + 1 !== products.length)
                horizontalLine = <hr style={{borderTop:"10px dotted #8c8b8b"}}/>;
            return (
                <Container fluid={true} className="col-9 row">
                    <div>
                        <ul>
                            <li>
                                <Container className="col-10">
                                    <h2 style={{marginBottom:"5px", marginTop:"10px"}}>{item.name}</h2>
                                </Container>
                                <img align="middle" className="col-7" style={{alignSelf:"center", margin:"0px auto 30px auto", minWidth:"400px"}}
                                     src={item.src} alt="Hizmet" height="300px"/>
                            </li>
                        </ul>
                    </div>
                </Container>
            );
        });

        return (
            <div style={{paddingBottom:"40px", paddingTop:"30px"}}>
                <Container className="col-10">
                    {productCards}
                </Container>
            </div>
        );
    }
}