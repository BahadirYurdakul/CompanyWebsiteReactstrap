import React from 'react';
import {Container} from "reactstrap";

const CompanyInfoCard = ({photoLink, content}) => (

    <Container fluid={true}>
        <Container className="col-6" fluid={true}>
            {photoLink ? <img className="col-xl-12" style={{minWidth:"250px"}}
                        src={photoLink} alt="CVS makine"/> :
                <span>Fotoğraf bulunamadı</span>}

        </Container>
        <div style={{margin:"30px 10px"}}>
            {content}
        </div>
    </Container>
);

export default CompanyInfoCard;