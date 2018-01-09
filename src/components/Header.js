import React from 'react';
import {Container, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";
import module from '../api/AccountsAPI';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.loginClicked = this.loginClicked.bind(this);
        this.signUpClicked = this.signUpClicked.bind(this);
        this.logOutClicked = this.logOutClicked.bind(this);
        this.signUpSubmitClicked = this.signUpSubmitClicked.bind(this);
        this.state = {
            username: window.sessionStorage.getItem("username")
        };
    }

    loginClicked() {
        this.loginModal.toggle();
        window.sessionStorage.setItem("username", "BAHADIR");
        this.forceUpdate();
    }

    async signUpSubmitClicked() {
        function validatePassword(){
            let password = document.getElementById("password");
            let password2 = document.getElementById("password2");
            if(password.value !== password2.value) {
                password2.setCustomValidity("Şifreler eşleşmiyor.");
                return false;
            } else {
                password2.setCustomValidity('');
                return true;
            }
        }

        if(!validatePassword())
            return;

        let account = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
            email: document.getElementById("email").value,
            telephone: document.getElementById("telephone").value,
            companyName: document.getElementById("companyName").value,
            companyAddress: document.getElementById("companyAddress").value,
            title: document.getElementById("positionInCompany").value,
            nameSurname: document.getElementById("name").value
        };

        let status = await module.signUp(account);

        if (status === 400)
            document.getElementById("username").setCustomValidity("Bu kullanıcı kullanılıyor.");
        else if (status === 200) {
            alert("Başarıyla kayıt oldunuz.");
            this.signUpModal.toggle();
        }
        else {
            alert("Kayıt olma sırasında bir hatayla karşılaştık. Lütfen tekrar deneyin.");
        }
    }

    async signUpClicked() {
        this.signUpModal.toggle();
    }

    logOutClicked() {
        //token sil.
        //sayfayı güncelle.
        window.sessionStorage.removeItem("username");
        this.forceUpdate();
        return 0;
    }

    render() {
        let username = window.sessionStorage.getItem("username");
        let firstNavBarLogin;
        let secondNavBarSignUp;

        if(window.sessionStorage.getItem("username") !== null)
        {
            let usernameClickedPath = "#/user/";
            firstNavBarLogin =
                <NavLink href={usernameClickedPath}>
                    Hoşgeldin {username}
                </NavLink>;
            secondNavBarSignUp = <NavLink onClick={() => this.logOutClicked()}>Çıkış Yap</NavLink>;
        }else {
            firstNavBarLogin = <NavLink style={{color:"#000000"}}  href="#" onClick={() => this.loginClicked()}>Giris Yap</NavLink>;
            secondNavBarSignUp = <NavLink style={{color:"#000000"}}  href="#" onClick={() => this.signUpClicked()}>Kayıt Ol</NavLink>
        }

        return (
            <div style={{minWidth: "800px"}}>
                <Navbar className="navbar-light col-lg-auto navbar-expand-sm">
                    <Container fluid={true}>
                        <Nav navbar>
                            <NavItem>
                                <img src={"http://www.freelogovectors.net/wp-content" +
                                "/uploads/2012/09/Erdemir-Demir-Celik-Logo.jpg"} height={"70"} alt="logo"
                                style={{minWidth:"50px"}}/>
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <Nav tabs={true} navbar>
                                <NavItem>
                                    <NavLink href="#/"><h5 style={{marginLeft:25, marginRight:15, color:"#000000"}}>Anasayfa</h5></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#/articles"><h5 style={{marginLeft:25, marginRight:15, color:"#000000"}}>Makale ve Eğitimler</h5></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#/products"><h5 style={{marginLeft:25, marginRight:15, color:"#000000"}}>Ürünler</h5></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#/shop"><h5 style={{marginLeft:25, marginRight:15, color:"#000000"}}>Sipariş</h5></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="#/aboutUs"><h5 style={{marginLeft:25, marginRight:15, color:"#000000"}}>Hakkımızda</h5></NavLink>
                                </NavItem>
                            </Nav>
                        </Nav>
                        <Nav className="float-md-right">
                            <NavItem>
                                {firstNavBarLogin}
                            </NavItem>
                            <NavItem>
                                {secondNavBarSignUp}
                            </NavItem>
                        </Nav>
                    </Container>

                </Navbar>
                <LoginModal ref={(loginModalIsVisible) => {this.loginModal = loginModalIsVisible}}/>
                <SignUpModal
                    ref={(signUpModalIsVisible) => {this.signUpModal = signUpModalIsVisible}}
                    submitCLicked={this.signUpSubmitClicked}
                />
            </div>
        );
    }
}

