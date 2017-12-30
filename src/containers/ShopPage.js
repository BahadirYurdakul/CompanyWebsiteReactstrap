import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Form, FormGroup, Input, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";
import ProductsCardInfo from "../components/ProductsCardInfo";

const data =
    {
        name: "Makine ismi",
        actualProperty: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
        EstimatedArrivalTime: '27.10.2017',
        src: 'http://makinemuh.cbu.edu.tr/db_images/slider/img_slider_4320_makine2.jpg',

    };

class ShopPage extends Component {

    render() {
        let name_summary_photo = {
            name: data.name,
            actualProperty: data.actualProperty,
            src: data.src
        }
        return (
            <div style={{backgroundColor:"#F2F1F0", height:"100%", marginTop:"-40px"}}>
                <div style={{marginTop:"40px"}}></div>
                <Container className="col-9">
                        <table>
                            <tbody>
                                <tr>
                                    <td>
                                        <Container fluid={true}>
                                            <img style={{border:"3px solid black"}} href="#" top width="300" src={data.src} alt="Ürün fotoğrafı" height="300"/>
                                        </Container>
                                    </td>
                                    <td style={{width:"100%",verticalAlign:"top"}}>
                                        <ProductsCardInfo info={data.actualProperty} caption={data.name}/>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div style={{border:"3px solid black", marginLeft:"20px", marginTop:"30px", fontSize:"20px"}}>Estimated Arrival Time</div>
                                    </td>
                                    <td style={{width:"100%"}}>
                                        <div className="col-lg" style={{fontSize:"20px", textAlign:"center", marginTop:"30px"}}>{data.EstimatedArrivalTime}</div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div style={{border:"3px solid black", marginLeft:"20px", marginTop:"30px", fontSize:"20px", verticalAlign:"top"}}>Desired Changes</div>
                                    </td>
                                    <td style={{width:"100%", verticalAlign:"top"}}>
                                        <div className="col-7" style={{fontSize:"20px", marginTop:"50px", marginLeft:"auto", marginRight:"auto"}}>
                                            <Form>
                                                <FormGroup>
                                                    <textarea className="col-10" style={{verticalAlign:"middle"}} placeholder="Customize the product" cols="50" rows="10"></textarea>
                                                </FormGroup>
                                                <Button>Submit</Button>
                                            </Form>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                </Container>
            </div>
        );
    }
}

export default ShopPage;