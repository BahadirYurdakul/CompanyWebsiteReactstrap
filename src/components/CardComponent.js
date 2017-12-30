import React, { Component } from 'react';
import {
    Card, CardBody, CardGroup, CardSubtitle, CardText, CardTitle, Container
} from "reactstrap";

export default class CardComponent extends Component {
    
    render() {
        const { cardItems } = this.props;

        const cards = cardItems.map((item) => {
            return (
                <Card>
                    <img href="#" top width="100%" src={item.src} alt="Ürün fotoğrafı" height="300" />
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>{item.info}</CardText>
                    </CardBody>
                </Card>
            );
        });

        return (
            <Container className="col-9">
                <CardGroup>
                    {cards[0]}{cards[1]}{cards[2]}
                </CardGroup>
                <CardGroup>
                    {cards[3]}{cards[4]}{cards[5]}
                </CardGroup>
            </Container>
        );
    }
}