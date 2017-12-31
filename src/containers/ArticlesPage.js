import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Container} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";

const data = [
    {
        id: '1',
        caption: "İş güvenliği",
        description: '<p>Basarili</p>',
        src: '',
        author: "Sir Conan",
        date: "27 July 2017"
    },
    {
        id: '2',
        caption: "Makinelerin güvenliği",
        description: '<h1>Basarili</h1>',
        src: '',
        author: "Sir Conan",
        date: "27 July 2017"
    },
    {
        id: '3',
        caption: "Article 3",
        description: '<p>Basarili</p>',
        src: '',
        author: "Sir Conan",
        date: "27 July 2017"
    }
];

class ArticlesPage extends Component {

    render() {
        let props = {
            author: data[0].author,
            date: data[0].date
        }
        return (
            <div style={{backgroundColor:"#F2F1F0",minWidth:"800px"}}>
                <Container className="col-lg">
                    <div style={{border:"2px solid black", marginBottom:"10px"}}>
                    <table border="0px">
                        <tbody>
                        <tr>
                            <td style={{verticalAlign:"top", borderRight:"2px solid black"}}>
                                <List data={data}/>
                            </td>
                            <td style={{width:"100%", minWidth:"300px"}}>
                                <CompanyInfoCard/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{borderTop:"2px solid black", borderRight:"2px solid black"}}><PaginationComponent/></td>
                            <td>
                                <AuthorAndDateInfo props={props}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </Container>
            </div>
        );
    }
}

export default ArticlesPage;