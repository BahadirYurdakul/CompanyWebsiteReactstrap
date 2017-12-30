import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Container} from 'reactstrap';

export default class List extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {data} = this.props;
        const listItems = data.map((item) => {
            return (
                <li style={{marginTop:"0px"}}>
                    <Button color="dark" className="btn-block" size="lg">
                        {item.caption}
                    </Button>
                </li>
            );
        });


        return (
            <Container>
                <ul style={{listStyleType:"none", padding:"0px", marginTop:"15px", alignSelf:"top"}}>
                    {listItems}
                </ul>
            </Container>
        );
    }
}