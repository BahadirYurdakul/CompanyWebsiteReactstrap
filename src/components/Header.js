import React from 'react';
import {Container, Nav, Navbar, NavItem, NavLink} from "reactstrap";
import LoginModal from "./LoginModal";
import SignUpModal from "./SignUpModal";

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.loginClicked = this.loginClicked.bind(this);
        this.signUpClicked = this.signUpClicked.bind(this);
        this.logOutClicked = this.logOutClicked.bind(this);
    }

    loginClicked() {
        this.loginModal.toggle();
        window.sessionStorage.setItem("username", "BAHADIR");
        this.forceUpdate();
    }

    signUpClicked() {
        this.signUpModal.toggle();
    }

    logOutClicked() {
        //token sil.
        //sayfayı güncelle.
        window.sessionStorage.removeItem("username");
        this.forceUpdate();
        return;
    }

    render() {
        let username = window.sessionStorage.getItem("username");
        let firstNavBarLogin;
        let secondNavBarSignUp;

        if(window.sessionStorage.getItem("username") !== null)
        {
            let usernameClickedPath = "#/user/";
            firstNavBarLogin =
                <NavLink setyle={{color:"#000000"}} href={usernameClickedPath}>
                    <h5 style={{marginLeft:15, marginRight:15, color:"#1E90FF"}}>Hoşgeldin {username}</h5>
                </NavLink>;
            secondNavBarSignUp = <NavLink href="#" onClick={() => this.logOutClicked()}>Çıkış Yap</NavLink>;
        }else {
            firstNavBarLogin = <NavLink href="#" onClick={() => this.loginClicked()}>Giris Yap</NavLink>;
            secondNavBarSignUp = <NavLink href="#" onClick={() => this.signUpClicked()}>Kayıt Ol</NavLink>
        }

        return (
            <div>
                <Navbar className="navbar-light" expand="md">
                    <Container>
                        <Nav className="align-items-lg-center" navbar>
                            <NavItem>
                                <img src={"http://www.freelogovectors.net/wp-content/uploads/2012/09/Erdemir-Demir-Celik-Logo.jpg"} height={"70"} alt="logo" />
                            </NavItem>
                        </Nav>
                        <Nav navbar>
                            <Nav tabs={true} navbar>
                                <NavItem>
                                    <NavLink href="#/"><h5 style={{marginLeft:15, marginRight:15, color:"#000000"}}>Anasayfa</h5></NavLink>
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
                    </Container>
                    <Nav className="float-md-right" navbar>
                        <NavItem>
                            {firstNavBarLogin}
                        </NavItem>
                        <NavItem>
                            {secondNavBarSignUp}
                        </NavItem>
                    </Nav>

                </Navbar>
                <LoginModal ref={(loginModalIsVisible) => {this.loginModal = loginModalIsVisible}}/>
                <SignUpModal ref={(signUpModalIsVisible) => {this.signUpModal = signUpModalIsVisible}}/>
            </div>
        );
    }
}

