import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import AccountInfoTable from "../components/AccountInfoTable";
import OrderTable from "../components/OrderTable";
import PaginationComponent from "../components/PaginationComponent";

const data =
    {
        name: "Bahadır Yurdakul",
        telephone: "0555 555 55 55",
        companyName: "Unemployed :)",
        address: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. " +
            "Gülbahçe/İzmir"
    };

const orderList = [
    {
        orderNo: "21341667766717",
        productName: "Product 1",
        status: "Yapım Aşamasında",
        cancelOrder: "false"
    },
    {
        orderNo: "92342661769717",
        productName: "Product 3",
        status: "Onay bekleniyor",
        cancelOrder: "true"
    },
    {
        orderNo: "18341667766772",
        productName: "Product 4",
        status: "Yapım Aşamasında",
        cancelOrder: "false"
    },
    {
        orderNo: "49262661769982",
        productName: "Product 5",
        status: "Onay bekleniyor",
        cancelOrder: "true"
    }
];





export default class UserPage extends Component {
    render() {
        const username = window.sessionStorage.getItem("username");
        return (
            <div style={{backgroundColor:"#F2F1F0", minHeight:"100%", height:"100%"}}>
                <h1 style={{textAlign:"center", paddingTop:"30px", marginBottom:"3%"}}>Kullanıcı Bilgileri</h1>
                <Container className="col-9">
                    <AccountInfoTable userInfo={data} username={username}/>
                </Container>
                <Container className="col-9">
                    <OrderTable orderList={orderList}/>
                </Container>
                <Container>
                    <PaginationComponent/>
                </Container>

            </div>
        );
    }
}