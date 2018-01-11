import React, { Component } from 'react';
import {FormGroup, Input, Label} from "reactstrap";

export default class ProductsCard extends Component {

    render() {
        const { productOnClick, productsList } = this.props;
        let ProductsInputGroup = productsList.map((item, index) => {
            return (<option id={index} onClick={() => productOnClick(index)}>{item.productName}</option>)
        });

        return (
            <FormGroup className="col-12" fluid={true}>
                <div className="col-9" style={{marginLeft:"auto", marginRight:"auto"}}>
                    <Label for="exampleSelect">Ürün Seç</Label>
                    <Input type="select" className="custom-select" name="select" id="exampleSelect">
                        {ProductsInputGroup}
                    </Input>
                </div>
            </FormGroup>
        );
    }
}