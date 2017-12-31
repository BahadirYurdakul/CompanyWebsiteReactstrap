import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.SubmitCLicked = this.SubmitCLicked.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    SubmitCLicked() {
        this.toggle();
    }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-body">
                    <ModalHeader toggle={this.toggle}>Giriş yap</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Email"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Şifre</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Şifre" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <button type="button" className="btn-secondary" onClick={this.toggle}>İptal</button>
                        <button type="button" className="btn-primary" onClick={() => this.SubmitCLicked()}>Onayla</button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}