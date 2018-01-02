import React, { Component } from "react";
import Carousel from "../components/Carousel";
import CardComponent from "../components/CardComponent";
import {Container} from "reactstrap";
import List from "../components/List";
import CompanyInfoCard from "../components/CompanyInfoCard";
import PaginationComponent from "../components/PaginationComponent";
import AuthorAndDateInfo from "../components/AuthorAndDateInfo";
import module from '../api/ArticleAPI';

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

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            dateAndAuthor: []
        };
    }

    async componentDidMount() {
        let data = await module.getArticles(0);
        let date = data[0].date;
        let author = data[0].author;
        this.setState({ data });
        this.setState({ date });
        this.setState({ author });
    }

    render() {
        return (
            <div style={{backgroundColor:"#F2F1F0",minWidth:"800px"}}>
                <Container className="col-lg">
                    <div style={{border:"2px solid black", marginBottom:"10px"}}>
                    <table border="0px">
                        <tbody>
                        <tr>
                            <td style={{verticalAlign:"top", borderRight:"2px solid black"}}>
                                <List data={this.state.data}/>
                            </td>
                            <td style={{width:"100%", minWidth:"300px"}}>
                                <CompanyInfoCard/>
                            </td>
                        </tr>
                        <tr>
                            <td style={{borderTop:"2px solid black", borderRight:"2px solid black"}}><PaginationComponent/></td>
                            <td>
                                <AuthorAndDateInfo date={this.state.date} author={this.state.author}/>
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