import React, { Component } from 'react';
import telephoneIcon from "../images/gylphicons/Telephone.png";
import mailIcon from "../images/gylphicons/mail.png";
import {Container} from "reactstrap";

export default class InfoBox extends Component {
    render() {
        const { info } = this.props;
        return (
            <div>
                <footer className="col-lg-auto" id="myFooter" style={{minWidth: "500px"}}>
                    <div>
                        <div className="row">
                            <div className="col-sm-3"  style={{margin:"0px 5% 0px 5%"}}>
                                <iframe   height="300"
                                          width="100%"
                                          style={{border:0}}
                                          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCSLfXDxUzkyaKK0EOjYgilHY4XjBYom8c
                                    &q=38.437288, 27.151813">
                                </iframe>
                            </div>
                            <div className="col-sm-2" style={{marginLeft:"2%", marginRight:"2%"}}>
                                <h5>Adres</h5>
                                <ul>
                                    <li>Turabiye Mahallesi</li>
                                    <li>Necat Hepkon Cad.</li>
                                    <li>No:63-67/4</li>
                                    <li>Seferihisar/İZMİR</li>
                                </ul>
                            </div>
                            <div className="col-sm-4" style={{marginLeft:"2%", marginRight:"1%"}}>
                                <h5>İletişim</h5>
                                <ul>
                                    <li><div><img height="35px" src={telephoneIcon}/><text>+90 232 238 53 57</text></div></li>
                                    <li><div><img height="35px" src={telephoneIcon}/><text>+90 542 417 38 01</text></div></li>
                                    <li><div><img height="35px" src={mailIcon}/><text>ibrahimnuhoğlu@cpmmuhendislik.com</text></div></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright">
                        <p>© 2018 Copyrighted By CPM</p>
                    </div>
                </footer>
            </div>
        );
    }
}