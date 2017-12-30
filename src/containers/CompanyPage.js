import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Button, Container, Row} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";


const data = [
    {
        id: '1',
        caption: "Hakkımızda"
    },
    {
        id: '2',
        caption: "Referanslar"
    },
    {
        id: '3',
        caption: "Misyon Vizyon"
    }
];


export default class CompanyPage extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#F2F1F0"}}>
                <Container className="col-lg">
                        <table border="2px solid black">
                            <tbody>
                            <tr>
                                <td style={{verticalAlign:"top"}}>
                                    <List data={data}/>
                                </td>
                                <td style={{width:"100%"}}>
                                    <CompanyInfoCard/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                </Container>
            </div>
        );
    }
}