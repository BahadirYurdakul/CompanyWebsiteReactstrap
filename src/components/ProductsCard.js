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
                <Row className="col-lg">
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <img style={{border:"3px solid black"}} href="#" top width="200" src={item.src} alt="Ürün fotoğrafı" height="200"/></td>
                            <td style={{width:"100%"}}>
                                <ProductsCardInfo info={item.info} caption={item.name}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Row>
            );
        });

        return (
            <Container className="col-10">
                <CardGroup>
                    {productCards[0]}
                </CardGroup>

                <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>

                <CardGroup>
                    {productCards[1]}
                </CardGroup>

                <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>

                <CardGroup>
                    {productCards[2]}
                </CardGroup>

                <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>

                <CardGroup>
                    {productCards[3]}
                </CardGroup>

                <hr className="col-9" style={{borderTop:"10px dotted #8c8b8b"}}/>

                <CardGroup>
                    {productCards[4]}
                </CardGroup>
            </Container>
        );
    }
}