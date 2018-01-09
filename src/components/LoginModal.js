import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

export default class LoginModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    render() {
        const { onLoginClicked } = this.props;
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-body">
                    <ModalHeader toggle={this.toggle}>Giriş yap</ModalHeader>
                    <ModalBody>
                            <FormGroup>
                                <Label for="username">Kullanıcı Adı</Label>
                                <Input type="text" name="text" id="loginUsername" placeholder="Kullanıcı Adı"/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Şifre</Label>
                                <Input type="password" name="password" id="loginPassword" placeholder="Şifre"/>
                            </FormGroup>

                            <ModalFooter>
                                <button type="button" className="btn-secondary" onClick={this.toggle}>İptal</button>
                                <button className="btn-primary" onClick={onLoginClicked}>Onayla</button>
                            </ModalFooter>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}