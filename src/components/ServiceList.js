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
                                    <h2 >{item.name}</h2>
                                </Container>
                                <img align="middle" className="col-7" style={{alignSelf:"center", margin:"0px auto 30px auto"
                                    , minWidth:"220px", minHeight:"220px"}}
                                     src={item.src} alt="Hizmet"/>
                            </li>
                        </ul>
                    </div>
                </Container>
            );
        });

        return (
            <div>
                <Container className="col-10">
                    {productCards}
                </Container>
            </div>
        );
    }
}