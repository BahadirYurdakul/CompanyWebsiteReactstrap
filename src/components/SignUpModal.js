import React from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

export default class signUpModal extends React.Component {
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
        const { submitCLicked } = this.props;
        return (
            <div style={{width:"500px"}}>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className="modal-lg">
                    <ModalHeader toggle={this.toggle}>Kayıt Ol</ModalHeader>
                    <ModalBody>
                        <form>
                            <FormGroup>
                                <Label>Kullanıcı Adı*</Label>
                                <input className="form-control" type="text" id="username"
                                       placeholder="Kullanıcı Adı" required={true}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Email*</Label>
                                <input className="form-control" type="email" name="email"
                                       id="email" placeholder="Email" required={true}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Ad Soyad*</Label>
                                <input className="form-control" type="text" name="name"
                                       id="name" placeholder="Ad Soyad" required={true}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Telefon*</Label>
                                <input className="form-control" type="telephone" name="telephone"
                                       id="telephone" placeholder="Telefon" required={true}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Şirket Adı</Label>
                                <input className="form-control" type="text" name="companyName"
                                       id="companyName" placeholder="Şirket Adı" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Şirket Adresi</Label>
                                <input className="form-control" type="text" name="companyAddress"
                                       id="companyAddress" placeholder="Şirket Adresi" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Şirket İçi Pozisyon</Label>
                                <input className="form-control" type="text" name="positionInCompany"
                                       id="positionInCompany" placeholder="Şirket İçi Pozisyon" />
                            </FormGroup>

                            <FormGroup>
                                <Label>Şifre*</Label>
                                <input pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                                       title="Sayı, büyük harf, küçük harf ve 6'den fazla karakter bulundurmalıdır"
                                       type="password" className="form-control" name="password" id="password"
                                       placeholder="Şifre" required={true}/>
                            </FormGroup>

                            <FormGroup>
                                <Label>Şifrenizi Onaylayın*</Label>
                                <input className="form-control" type="password" name="password2" id="password2"
                                       placeholder="Şifrenizi Onaylayın" required={true}/>
                            </FormGroup>

                            <ModalFooter>
                                <button type="button" className="btn-secondary" onClick={this.toggle}>İptal</button>
                                <button formAction="post" type="submit" className="btn-primary" onClick={submitCLicked}>Onayla</button>
                            </ModalFooter>
                        </form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}