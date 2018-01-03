import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Container} from 'reactstrap';

export default class List extends React.Component {

    render() {
        let {onClick} = this.props;
        const {data} = this.props;
        const listItems = data.map((item, index) => {
            return (
                <li style={{marginTop:"0px"}}>
                    <Button color="dark" key={index} onClick={() => onClick(index)} className="btn-block" size="lg">
                        {item.title}
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