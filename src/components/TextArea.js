import React from 'react';
import {Button, Form, FormGroup} from "reactstrap";

export default class OrderTable extends React.Component {
    constructor(props) {
        super(props);
        this.submitButtonClicked = this.submitButtonClicked.bind(this);
    }

    submitButtonClicked() {
        this.forceUpdate();
    }


    render() {
        const { placeholder } = this.props;

        return (
            <div className="col-7" style={{fontSize:"20px"
                , marginTop:"50px", marginLeft:"auto", marginRight:"auto"
                , minWidth:"300px", minHeight:"250px", paddingBottom:"20px"}}>
                <Form>
                    <FormGroup>
                        <textarea className="col-10" style={{verticalAlign:"middle"}}
                                  placeholder={placeholder}
                                  cols="70" rows="10"/>
                    </FormGroup>
                    ><Button onClick={this.submitButtonClicked}>Siparişi Onayla</Button>
                </Form>
            </div>
        );
    }
}
