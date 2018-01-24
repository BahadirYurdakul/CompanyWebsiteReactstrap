import React, { Component } from 'react';
import {
    CardGroup, Container, Row
} from "reactstrap";
import ProductsCardInfo from "./ProductsCardInfo";

export default class ProductsCard extends Component {

    render() {
        const { products } = this.props;

        const productCards = products.map((item, index) => {
            let horizontalLine;
            if(index + 1 !== products.length)
                horizontalLine = <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>;
            return (
                <div>
                    <CardGroup>
                        <Row className="col-lg">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <img style={{border:"3px solid black"}} href="#" top width="200" src={item.photoLink} alt="Hizmet fotoğrafı" height="200"/></td>
                                    <td style={{minWidth:"240px"}}>
                                        <ProductsCardInfo info={item.info} caption={item.productName}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Row>
                    </CardGroup>
                    {horizontalLine}
                </div>
            );
        });

        return (
            <div style={{marginBottom:"50px"}}>
                <Container className="col-10">
                    {productCards}
                </Container>
            </div>
        );
    }
}