import React, { Component } from 'react';
import {
    CardGroup, Container, Row
} from "reactstrap";
import ProductsCardInfo from "./ProductsCardInfo";

export default class ProductsCard extends Component {

    render() {
        const { products } = this.props;

        const productCards = products.map((item) => {
            return (
                <div>
                    <CardGroup>
                        <Row className="col-sm-3">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <img style={{border:"3px solid black"}} href="#" top width="200" src={item.photoLink} alt="Ürün fotoğrafı" height="200"/></td>
                                    <td style={{width:"100%"}}>
                                        <ProductsCardInfo info={item.info} caption={item.productName}/>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </Row>
                    </CardGroup>
                    <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>
                </div>
            );
        });

        return (
            <Container className="col-10">
                {productCards}
            </Container>
        );
    }
}