import React, { Component } from 'react';
import {Container} from "reactstrap";

export default class InfoBox extends Component {
    render() {
        const { info } = this.props;
        return (
            <div  style={{
                backgroundColor:"#282d33"
                , position: "absolute"
                , right: "0"
                , bottom: "0"
                , marginBottom: "0px"
                , left: "0"
                , padding: "0px"
                , textAlign: "center"}}
            >
                <Container fluid className="card-footer">
                    <Container className="col-10">
                    <div align="right">
                        <a href="https://www.facebook.com/cvsmakine" >
                            <img className="col-2" style={{marginRight:'60px'}}
                                 src="http://www.fjcgtownhorry.org/images/FacebookLogo.jpg"
                                 alt="Facebook CVS Makine"/>
                        </a>
                        <a href="https://www.instagram.com/" >
                            <img className="col-2" style={{marginRight:'30px', marginTop:"5px"}}
                                 src="http://d24gm8viwxmokc.cloudfront.net/assets/instagram-logo-w-dee91fcc2a6eb4ec26b2524868fdac9d.png"
                                 alt="Instagram CVS Makine"/>
                        </a>
                    </div>
                    </Container>
                </Container>
            </div>
        );
    }
}