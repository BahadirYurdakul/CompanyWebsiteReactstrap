import React from 'react';
import {Container} from "reactstrap";

const productsHrCaption = ( {caption} ) => (
    <Container className="col-8">
        <h2 style={{
            width: "100%",
            textAlign: "center",
            borderBottom: "1px solid #A9A9A9",
            color: "#778899",
            lineHeight: "0.1em",
            margin: "10px 0 20px"
        }}
        >
            <span style={{
                background: "#F2F1F0",
                padding: "0 10px"
            }}
            >
                {caption}
            </span>
        </h2>
    </Container>
);

export default productsHrCaption;