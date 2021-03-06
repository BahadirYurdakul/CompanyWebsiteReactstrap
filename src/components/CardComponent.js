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
                    <img width="100%" src={item.src} alt="Ürün" height="300" />
                    <CardBody>
                        <CardTitle><b>{item.title}</b></CardTitle>
                        {/*<CardText>{item.info}</CardText>*/}
                    </CardBody>
                </Card>
            );
        });

        return (
            <Container className="col-9" style={{paddingBottom:"50px"}}>
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