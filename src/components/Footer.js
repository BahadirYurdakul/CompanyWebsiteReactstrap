import React, { Component } from 'react';
import {Container} from "reactstrap";

export default class InfoBox extends Component {
    render() {
        const { info } = this.props;
        return (
            <div>
                <footer className="col-lg-auto" id="myFooter" style={{minWidth: "500px"}}>
                    <div>
                        <div className="row">
                            <div className="col-sm-4"  style={{margin:"0px 5% 0px 5%"}}>
                                <iframe   height="300"
                                          width="100%"
                                          style={{border:0}}
                                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCSLfXDxUzkyaKK0EOjYgilHY4XjBYom8c
                                    &q=38.437288, 27.151813">
                                </iframe>
                            </div>
                            <div className="col-sm-2" style={{marginLeft:"2%", marginRight:"2%"}}>
                                <h5>İletişim Bilgileri</h5>
                                <ul>
                                    <li>Atatürk Mahallesi</li>
                                    <li>Konak </li>
                                    <li>İZMİR/TÜRKİYE</li>
                                    <li>Telefon Numarası: 0372 xxx xx xx</li>
                                </ul>
                            </div>
                            <div className="col-sm-2" style={{marginLeft:"2%", marginRight:"2%"}}>
                                <h5>Makine</h5>
                                <ul>
                                    <li><a href="#">Makale ve Eğitimlerimiz</a></li>
                                    <li><a href="#">Bizimle İletişime geçin</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-1" style={{marginLeft:"2%", marginRight:"2%"}}>
                                <h5>Sosyal Medya Hesaplarımız</h5>
                                <ul>
                                    <li><a href="#">
                                        <img style={{width:"100%", maxWidth:"50px", marginBottom:"10px"}}
                                             src="http://icons.iconarchive.com/icons/danleech/simple/512/facebook-icon.png"/>
                                    </a></li>
                                    <li><a href="#">
                                        <img style={{width:"100%", maxWidth:"50px"}}
                                             src="http://www.nwacsports.org/images/template/footer%20logos/Instragram-logo-square.png"/>
                                    </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2018 Copyrighted By Backdoor</p>
                    </div>
                </footer>
            </div>
        );
    }
}