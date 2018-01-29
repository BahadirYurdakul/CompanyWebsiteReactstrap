import React from 'react';
import {Container} from "reactstrap";

const CompanyInfoCard = ({photoLink, content}) => (
    <Container fluid={true}>
        <Container className="col-6" fluid={true}>
            {photoLink ? <img style={{width:"100%", minHeight:"100px"}}
                        src={photoLink} alt="CPM Mühendislik"/> :
                <span>Fotoğraf bulunamadı</span>}
        </Container>
        <text id="textFont" style={{margin:"30px 10px"}}>
            {content}
        </text>
    </Container>
);

export default CompanyInfoCard;