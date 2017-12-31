import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

export default class signUpModal extends React.Component {
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
            <div style={{width:"500px"}}>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
                    <ModalHeader toggle={this.toggle}>Kayıt Ol</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="username">Kullanıcı Adı*</Label>
                                <Input type="text" name="username" id="username" placeholder="Kullanıcı Adı"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email*</Label>
                                <Input type="email" name="email" id="email" placeholder="Email"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="name">Ad Soyad*</Label>
                                <Input type="text" name="name" id="name" placeholder="Ad Soyad"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="telephone">Telefon*</Label>
                                <Input type="telephone" name="telephone" id="telephone" placeholder="Telefon"/>
                            </FormGroup>

                            <FormGroup>
                                <Label for="companyName">Şirket Adı</Label>
                                <Input type="text" name="companyName" id="companyName" placeholder="Şirket Adı" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="companyAddress">Şirket Adresi</Label>
                                <Input type="text" name="companyAddress" id="companyAddress" placeholder="Şirket Adresi" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="positionInCompany">Şirket İçi Pozisyon</Label>
                                <Input type="text" name="positionInCompany" id="positionInCompany" placeholder="Şirket İçi Pozisyon" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password">Şifre</Label>
                                <Input type="password" name="password" id="password" placeholder="Şifre" />
                            </FormGroup>

                            <FormGroup>
                                <Label for="password2">Şifrenizi Onaylayın</Label>
                                <Input type="password" name="password2" id="password2" placeholder="Şifrenizi Onaylayın" />
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