import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Form, FormGroup, Input, Label, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";
import ProductsCardInfo from "../components/ProductsCardInfo";
import ChooseProduct from "../components/ChooseProduct";
import TextArea from "../components/TextArea";
import LoadError from "../components/Error";

const data =
    {
        name: "Makine ismi",
        actualProperty: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
        EstimatedArrivalTime: '27.10.2017',
        src: 'http://makinemuh.cbu.edu.tr/db_images/slider/img_slider_4320_makine2.jpg',
    };

const productsList = [
    {productName: "Product 1"},
    {productName: "Product 2"},
    {productName: "Product 3"},
    {productName: "Product 4"},
    {productName: "Product 5"}
];

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadErr: false
        };
    }

    async componentDidMount() {
        //
    }

    render() {
        let name_summary_photo = {
            name: data.name,
            actualProperty: data.actualProperty,
            src: data.src
        };
        
        return (
            <div>
                {this.state.loadErr ? <LoadError/> :
                    <div id="pageMinWidthWrapper">
                        <Container className="col-sm-10">
                                <table width="100%">
                                        <tr>
                                            <td>
                                                <img className="col-md-12" style={{minWidth:"200px",minHeight:"200px"}}
                                                     src={data.src} alt="Ürün fotoğrafı"/>
                                            </td>
                                            <td style={{width:"100%",verticalAlign:"top"}}>
                                                <ProductsCardInfo info={data.actualProperty} caption={data.name}/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div style={{border:"3px solid black"
                                                    , marginLeft:"20px", marginTop:"30px", paddingLeft:"10px"
                                                    , fontSize:"20px"}}>
                                                    Diğer ürünlerimiz
                                                </div>
                                            </td>
                                            <td style={{width:"100%"}}>
                                                <ChooseProduct productsList={productsList}/>
                                            </td>
                                        </tr>


                                        <tr>
                                            <td>
                                                <div style={{border:"3px solid black"
                                                    , marginLeft:"20px", marginTop:"30px"
                                                    , paddingLeft:"10px", fontSize:"20px"}}>
                                                    Tahmini Teslim Tarihi
                                                </div>
                                            </td>
                                            <td style={{width:"100%"}}>
                                                <div className="col-lg" style={{fontSize:"20px", textAlign:"center"
                                                    , marginTop:"30px"}}>{data.EstimatedArrivalTime}
                                                    </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <div style={{border:"3px solid black", marginLeft:"20px"
                                                    , marginTop:"30px", fontSize:"20px", paddingLeft:"10px"
                                                    , verticalAlign:"top"}}>
                                                    İstenen Özellikler
                                                </div>
                                            </td>
                                            <td style={{width:"100%", verticalAlign:"top"}}>
                                                <TextArea placeholder="Ürününüzü özelleştirin"/>
                                            </td>
                                        </tr>
                                </table>
                        </Container>
                    </div>
                }
            </div>
        );
    }
}

export default ShopPage;